import { useHeaders } from '../utils/http-headers';

export default defineNuxtRouteMiddleware(async (to, from) => {

    const {$isAuthenticated } :any = useNuxtApp()
    const headers= useHeaders()
    try {
      
      // console.log(to?.meta?.layout,from?.meta?.layout)

    //   const { data,error:authenticatedError } = await useFetch("/api/admin/isAuthenticated", {
    //     headers: {
    //         ...headers
    //     },
    
    // });
    // $isAuthenticated(authenticatedError) as any
    
    } catch (error:any) {
      console.log(error?.message)
    }
    
  })
  