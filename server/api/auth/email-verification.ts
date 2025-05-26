import prisma from "~/lib/prisma";
import { USER_EMAIL_TYPE } from "./modules/user.constant";
export default defineEventHandler(async (event) => {
    
    const { email, otpCode } = await readBody(event)


    const userExist = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (userExist) {
     const existingOtpCode=userExist?.otpCode

     if(parseInt(existingOtpCode)===parseInt(otpCode)){

        const updatedUser = await prisma.user.update({
            where: {
              email: email, 
            },
            data: {
              isValidEmail:USER_EMAIL_TYPE.VALID_EMAIL, 
            },
          });
        
          return { message: 'Your email has been verified successfully', redirect:true };
     }
        
    }else{
        throw createError({ statusCode: 400, message: 'Invalid E-mail adress' })
    }


   
})