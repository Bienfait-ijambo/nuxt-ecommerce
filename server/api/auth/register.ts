import prisma from "~/utils/script.prisma";
import { hashPassword } from "./modules/bcrypt";

export default  defineEventHandler(async(event) => {
    const {email,password}=await readBody(event)
    const userExist=await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(userExist){
        throw createError({statusCode:400,message:'This email is already been taken'})
    }

    const hashPwd=await hashPassword(password)

    const user=await prisma.user.create({
        data:{
            email:email,
            password:hashPwd
        }
    })
    
    return { message: 'User Created successfully',user };
  })