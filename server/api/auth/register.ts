import prisma from "~/lib/prisma";
import { hashPassword } from "./modules/bcrypt";
import { signupSchema } from "./modules/validateUser";
import { generateOTP } from "./modules/generateOtpCode";
import { USER_EMAIL_TYPE,USER_ROLE } from "./modules/user.constant";
import { sendEmailVerification } from "./modules/send-email-verification";
export default defineEventHandler(async (event) => {
    
    const { email,name, password } = await readBody(event)

    const result = signupSchema.safeParse({ email,name, password })

    if (!result.success) {
        throw createError({
                statusCode: 400,
                statusMessage: 'Validation Failed',
                data: result.error.flatten(),
            })
        
    }

    const userExist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (userExist) {
        throw createError({ statusCode: 400, message: 'This email is already been taken' })
    }

    const otpCode=generateOTP()
    const hashPwd = await hashPassword(password)

    const user = await prisma.user.create({
        data: {
            name:name,
            email: email,
            isValidEmail:USER_EMAIL_TYPE.INVALID_EMAIL,
            otpCode:otpCode,
            password: hashPwd,
            role:USER_ROLE.CUSTOMER
        }
    })

    await sendEmailVerification(email,otpCode)



    return { message: 'User Created successfully', user,redirect:true };
})