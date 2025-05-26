import prisma from "~/lib/prisma";
import { categorySchema } from "./modules/validateCategory";
import { withAuth } from "~/utils/withAuth";

export default withAuth(async (event) => {
    
    const { name,id } = await readBody(event)

    const result = categorySchema.safeParse({ name })

    if (!result.success) {
        throw createError({
                statusCode: 400,
                statusMessage: 'Validation Failed',
                data: result.error.flatten(),
            })
        
    }

    

    const category = await prisma.category.update({
        where:{
            id:id
        },
        data: {
            name:name,
           
        }
    })



    return { message: 'Category updated successfully', category };
})