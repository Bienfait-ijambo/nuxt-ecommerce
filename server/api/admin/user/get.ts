// import prisma from "~/utils/script.prisma";
// import { verifyToken } from "../../auth/modules/jwtToken";

import { withAuth } from "~/utils/withAuth"


// export default defineEventHandler(async (event) => {


        
//     const query = getQuery(event)
//     const search = query?.search as string
//     const page = parseInt(query?.page as string) || 1
//     const limit = parseInt(query?.limit as string) || 10



//     const authHeader = getHeader(event, 'authorization');

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         throw createError({ statusCode: 401, statusMessage: 'Invalid token' });
//     }
//     const accessToken = authHeader.split(' ')[1];

//     const verifyTokenData=await verifyToken(accessToken)

//     // if(verifyTokenData?.message==='invalid_token'){
//     //     throw createError({ statusCode: 401, statusMessage: 'Invalid token' });
//     // }
    
//     return {
//         message:"pass",verifyTokenData
        
//         // users, metadata: {
//         //     total,
//         //     page,
//         //     limit,
//         //     totalPages: Math.ceil(total / limit),
//         // }
//     };
      
        
   


    // const [users, total] = await Promise.all([

    //     prisma.user.findMany({
    //         where: search ? {
    //             name: {
    //                 contains: search,
    //                 mode: 'insensitive'
    //             }
    //         } : {},


    //         // 2-1*limit=10
    //         skip: (page - 1) * limit,
    //         take: limit
    //     }),

    //     prisma.user.count({
    //         where: search ? {
    //             name: {
    //                 contains: search,
    //                 mode: 'insensitive'
    //             }
    //         } : {},

    //     }),

    // ])



    
// })


// Any protected endpoint

export default withAuth(async (event) => {
  const user = (event.context as any).user
  return { message: `Hello, ${JSON.stringify(user)}` }
})

