import prisma from "~/lib/prisma";
import { validateUserIdSchema } from "./modules/validatePaymentInput";

export default defineEventHandler(async (event) => {

    const query = getQuery(event)
    const userId = query?.userId as string
    const userIdToNumber = parseInt(userId)

    const result = validateUserIdSchema.safeParse({ userId: userIdToNumber })

    if (!result.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Validation Failed',
            data: result.error.flatten(),
        })

    }

    const userOders = await prisma.payment.findMany({
        where: {
            userId: userIdToNumber
        },
        include: {
            product: {
                include: {
                    images: true
                }
            },
        },
    })


    return { userOders };
})