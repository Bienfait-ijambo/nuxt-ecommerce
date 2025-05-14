import prisma from "~/utils/script.prisma";
import { reviewSchema } from "./modules/validateReview";

export default defineEventHandler(async (event) => {
    
    const { userId,starNumber,productId,comment} = await readBody(event)



    const result = reviewSchema.safeParse({comment })

    if (!result.success) {
        throw createError({
                statusCode: 400,
                statusMessage: 'Validation Failed',
                data: result.error.flatten(),
            })
        
    }

    const customerReview = await prisma.productReview.findFirst({
        where: {
            productId: productId,
            userId:userId
        }
    })

    if (customerReview) {
        throw createError({ statusCode: 422, message: 'You already review this product' })
    }

    
    const user = await prisma.productReview.create({
        data: {
            userId:userId,
            starNumber:starNumber
            ,productId:productId,
            comment:comment
        }
    })



    return { message: 'Review saved successfully', };
})