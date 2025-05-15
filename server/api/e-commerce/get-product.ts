import prisma from "~/utils/script.prisma";

export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    const search = query?.search as string
    const page = parseInt(query?.page as string) || 1
    const limit = parseInt(query?.limit as string) || 10


    const filters = []


    const categories = Array.isArray(query?.categories) ? query?.categories :
        (query?.categories as string || '').split(',').map(Number).filter((i) => i > 0)

    const colors = Array.isArray(query?.colors) ? query?.colors :
        (query?.colors as string || '').split(',').filter((i) => i !== '')

    const prices = Array.isArray(query?.prices) ? query?.prices :
        (query?.prices as string || '').split(',').map(Number).filter((i) => i > 0)

    if (categories.length > 0) {
        filters.push({ categoryId: { in: categories } })
    }
    if (colors.length > 0) {
        filters.push({ color: { in: colors } })
    }
    if (prices.length === 2) {
        // filters.push({ price: { gte: prices[0].toString(), lte: prices[1].toString() } })
        filters.push({ price: { gte: prices[0], lte: prices[1] } })

    }

  
    // colors,categories,prices
    const [products, total] = await Promise.all([

        prisma.product.findMany({
            // select * from products where categories IN(1,2) or color IN("red","bue")
            // or price between 12 and 13
            where: filters.length > 0 ?
                { AND: filters }
                : {},
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                category: true,
                images: true,
                 reviews: true,
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
