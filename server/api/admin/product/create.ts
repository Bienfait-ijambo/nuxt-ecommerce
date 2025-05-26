import prisma from "~/lib/prisma";
import { productSchema } from "./modules/validateProduct";
import { withAuth } from "~/utils/withAuth";
import { generateSlug } from "./modules/slugifyProductName";

export default withAuth(async (event) => {
    
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
            slug:generateSlug(name),
            color:color,
            categoryId:categoryId,
            price:price.toString()
           
        }
    })



    return { message: 'product Created successfully', product };
})