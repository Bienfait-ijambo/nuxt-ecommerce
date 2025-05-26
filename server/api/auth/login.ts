import prisma from "~/lib/prisma";
import { comparePassword, hashPassword } from "./modules/bcrypt";
import { signInSchema } from "./modules/validateUser";
import { USER_EMAIL_TYPE } from "./modules/user.constant";
import { signAccessToken, signRefreshToken } from "../../../utils/jwtToken";
export default defineEventHandler(async (event) => {

    const { email, password } = await readBody(event)

    const result = signInSchema.safeParse({ email, password })

    if (!result.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Validation Failed',
            data: result.error.flatten(),
        })

    }

    const userExist = await prisma.user.findUnique({
        where: {
            email: email,
            isValidEmail:USER_EMAIL_TYPE.VALID_EMAIL
        }
    })

    if (!userExist) {
        throw createError({ statusCode: 422, message: 'Email or Password invalid' })
    }

    const isMatch = await comparePassword(password, userExist?.password)

    if (isMatch) {
        const [accessToken, refreshToken] = await Promise.all([
            signAccessToken(userExist?.id),
            signRefreshToken(userExist?.id)
        ])
        const data = {
            token: {
                accessToken: accessToken,
                refreshToken: refreshToken
            },
            user: { 
                name: userExist?.name, 
                email: userExist?.email, 
                role : userExist?.role, 
                id: userExist?.id 
            },
            isLoggedIn: true
        }
        return { message: 'User logged successfully', data };
    } else {
        throw createError({ statusCode: 422, message: 'Email or Password invalid' })
    }




})