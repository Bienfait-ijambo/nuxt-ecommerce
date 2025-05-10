import prisma from "~/utils/script.prisma";
import { withAuth } from "~/utils/withAuth";

export default defineEventHandler(async (event) => {
   
    const categories = await prisma.category.findMany()


    return {  categories };
})