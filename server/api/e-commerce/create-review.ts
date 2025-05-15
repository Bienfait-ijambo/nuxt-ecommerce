import prisma from "~/utils/script.prisma";
import { reviewSchema } from "./modules/validateReview";

export default defineEventHandler(async (event) => {

    const { userId, starNumber, productId, comment } = await readBody(event)



    const result = reviewSchema.safeParse({ comment })

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
            userId: userId
        }
    })

    if (customerReview) {
        throw createError({ statusCode: 422, message: 'You already review this product' })
    }


     await prisma.productReview.create({
        data: {
            userId: userId,
            starNumber: starNumber, 
            productId: productId,
            comment: comment
        }
    })

    const productStar = await prisma.productStar.findFirst({
        where: {
            productId: productId,
        }
    })
    //if productId exist
    if (productStar) {
        //increment receivedStars column
        const actualReceivedStar = productStar?.receivedStars
        const updateStars = actualReceivedStar + starNumber
        await prisma.productStar.update({
        where:{
           id: productStar?.id,
        },
        data: {
            receivedStars: updateStars

        }
    })

        
    } else {
        // insert 
        await prisma.productStar.create({
            data: {

                receivedStars: starNumber,
                productId: productId,

            }
        })
    }







    // model  {
    //   id         Int      @id @default(autoincrement())
    //   productId   Int
    //    Int



    return { message: 'Review saved successfully', };
})