export default defineNuxtPlugin({
    name: 'isAuthenticated',
    parallel: true,
    async setup (nuxtApp) {
      // the next plugin will be executed immediately
      nuxtApp.provide('isAuthenticated',(error:any)=>{
        const statusCode=error.value?.statusCode
        if(statusCode===401){
        window.location.href='/auth/signin'
        showError('Unauthenticated !')
        }
      })
    }
  })
  
