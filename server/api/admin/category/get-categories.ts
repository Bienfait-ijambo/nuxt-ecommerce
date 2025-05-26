import prisma from "~/lib/prisma";
import { withAuth } from "~/utils/withAuth";

export default defineEventHandler(async (event) => {
   
   try {
     const categories = await prisma.category.findMany()

    return {  categories };
    
   } catch (error) {
    throw createError({
        statusCode:500,
        statusMessage:"Server error"
    })
   }
})