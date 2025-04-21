import prisma from "~/utils/script.prisma";
import { hashPassword } from "./modules/bcrypt";
import { loginSchema } from "./modules/validateUser";

export default  defineEventHandler(async(event) => {
    const {email,password}=await readBody(event)

const result = loginSchema.safeParse({email,password})

        if (!result.success) {
        return sendError(
            event,
            createError({
            statusCode: 400,
            statusMessage: 'Validation Failed',
            data: result.error.flatten(),
            })
        )
        }

    const userExist=await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(userExist){
        throw createError({statusCode:400,message:'This email is already been taken'})
    }

    const hashPwd=await hashPassword(password)

    const user= await prisma.user.create({
        data:{
            email:email,
            password:hashPwd
        }
    })
 
    //email verification
    
    return { message: 'User Created successfully',user };
  })