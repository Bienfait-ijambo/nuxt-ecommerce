import prisma from "~/lib/prisma";


export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    const slug = query?.slug as string
  
    const products=await prisma.product.findFirst({
            where:{
                slug: slug
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
                },
                // reviews:true
                starPercents:true
              
                
            },
          
        })



    return {
        products 
    };
})


// [
//     {
//       "id": 1,
//       "name": "Product Name",
//       "color": "Black",
//       "price": "29.99",
//       "categoryId": 2,
//       "createdAt": "...",
//       "updatedAt": "...",
//       "category": {
//         "id": 2,
//         "name": "Electronics"
//       },
//       "images": [
//         { "id": 10, "url": "..." },
//         { "id": 11, "url": "..." }
//       ]
//     }
//   ]
