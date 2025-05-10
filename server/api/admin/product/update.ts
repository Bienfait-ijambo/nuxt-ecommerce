import prisma from "~/utils/script.prisma";
import { productSchema } from "./modules/validateProduct";
import { withAuth } from "~/utils/withAuth";
import slugify from 'slugify'
export default withAuth(async (event) => {
    
    const { id,name,color,categoryId,price } = await readBody(event)

    const result = productSchema.safeParse({ name,color,categoryId,price })

    if (!result.success) {
        throw createError({
                statusCode: 400,
                statusMessage: 'Validation Failed',
                data: result.error.flatten(),
            })
        
    }


    const product = await prisma.product.update({
        where:{
            id:id
        },
        data: {
            name:name,
            slug:slugify(name),
            color:color,
            categoryId:categoryId,
            price:price.toString()
           
        }
    })

    return { message: 'product updated successfully',product };
})