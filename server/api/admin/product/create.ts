import prisma from "~/utils/script.prisma";
import { productSchema } from "./modules/validateProduct";

export default defineEventHandler(async (event) => {
    
    const { name,color,categoryId,price } = await readBody(event)

    const result = productSchema.safeParse({ name,color,categoryId,price })

    if (!result.success) {
        throw createError({
                statusCode: 400,
                statusMessage: 'Validation Failed',
                data: result.error.flatten(),
            })
        
    }


    const product = await prisma.product.create({
        data: {
            name:name,
            color:color,
            categoryId:categoryId,
            price:price
           
        }
    })



    return { message: 'product Created successfully', product };
})