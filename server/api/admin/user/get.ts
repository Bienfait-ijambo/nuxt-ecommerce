import prisma from "~/utils/script.prisma";
import { verifyToken } from "../../auth/modules/jwtToken";
import { withAuth } from "~/utils/withAuth";
export default withAuth(async (event) => {


        
    const query = getQuery(event)
    const search = query?.search as string
    const page = parseInt(query?.page as string) || 1
    const limit = parseInt(query?.limit as string) || 10

 

    const [users, total] = await Promise.all([

      prisma.user.findMany({
          where: search ? {
              name: {
                  contains: search,
                  mode: 'insensitive'
              }
          } : {},


          // 2-1*limit=10
          skip: (page - 1) * limit,
          take: limit
      }),

      prisma.user.count({
          where: search ? {
              name: {
                  contains: search,
                  mode: 'insensitive'
              }
          } : {},

      }),

  ])
    
    return {
        
        users, metadata: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        }
    };
      
        
   




    
})


// Any protected endpoint
