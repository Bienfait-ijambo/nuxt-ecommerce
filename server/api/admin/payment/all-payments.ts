import prisma from "~/utils/script.prisma";

export default defineEventHandler(async (event) => {

  

    const userOrders = await prisma.payment.findMany({
   
        include: {
            product: {
                include: {
                    images: true
                }
            },
        },
    })


    return { userOrders };
})