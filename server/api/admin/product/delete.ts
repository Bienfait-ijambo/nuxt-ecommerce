import prisma from "~/utils/script.prisma";
import { deleteProductSchema } from "./modules/validateProduct";

export default defineEventHandler(async (event) => {
    
    const { id} = await readBody(event)

    const result = deleteProductSchema.safeParse({ id,})

    if (!result.success) {
        throw createError({
                statusCode: 400,
                statusMessage: 'Validation Failed',
                data: result.error.flatten(),
            })
        
    }


    const product = await prisma.product.delete({
        where:{
            id:id
        }
      
    })



    return { message: 'product deleted successfully' };
})