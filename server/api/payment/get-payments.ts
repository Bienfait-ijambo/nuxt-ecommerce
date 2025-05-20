import prisma from "~/utils/script.prisma";
import { withAuth } from "~/utils/withAuth";

export default defineEventHandler(async (event) => {

     const query = getQuery(event)
    const userId = query?.userId as string
   
    const userOders = await prisma.payment.findMany({
        where:{
            userId:parseInt(userId)
        }
    })


    return {  userOders };
})