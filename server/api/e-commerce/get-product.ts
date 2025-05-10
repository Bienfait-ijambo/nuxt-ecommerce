import prisma from "~/utils/script.prisma";

export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    const search = query?.search as string
    const page = parseInt(query?.page as string) || 1
    const limit = parseInt(query?.limit as string) || 10


    const [products, total] = await Promise.all([

        prisma.product.findMany({
            where: search ? {
                name: {
                    contains: search,
                    mode: 'insensitive'
                }
            } : {},
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                category: true,
                images: true
            },
            // 2-1*limit=10
            skip: (page - 1) * limit,
            take: limit
        }),

        prisma.product.count({
            where: search ? {
                name: {
                    contains: search,
                    mode: 'insensitive'
                }
            } : {},

        }),

    ])



    return {
        products, metadata: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        }
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
