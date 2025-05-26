import prisma from "~/lib/prisma";


export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    const categoryId = query?.categoryId as string


  
         const products=await prisma.product.findMany({
            where:{
           
                categoryId:parseInt(categoryId)
            } ,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                category: true,
                images: true,
                stars: true,
                _count: {
                    select: {
                        reviews: true
                    }
                }
               
            },
          
        })

    return {
        products 
    };
})

