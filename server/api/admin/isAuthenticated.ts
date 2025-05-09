import prisma from "~/utils/script.prisma";
import { withAuth } from "~/utils/withAuth";
export default withAuth(async (event) => {


    return {
        isAuthenticatd: true
    };

})
