import prisma from "~/utils/script.prisma";


export default defineEventHandler(async (event) => {

    const query=getQuery(event)
    const search=query?.search as string

    

    const products = await prisma.product.findMany({
        where:search?{
            name:{
                contains:search,
                mode:'insensitive'
            }
        }:{},
        orderBy:{
            createdAt:'desc'
        },
        include:{
            category:true,
           images:true
        }
    })


    return {  products };
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
  