import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    const productId = query?.productId as string

    if(typeof productId==='undefined'){
        throw createError({
                statusCode: 400,
                statusMessage: 'Validation Failed',
                data: [{message:"productId should be a number"}],
            })
    }
    

  
    // colors,categories,prices
    const productReviews=await  prisma.product.findMany({
        
            where: {
                id:parseInt(productId)
            },
           
            include: {
                reviews: true,

            },
          
        })

    return {
        productReviews
    };
})

