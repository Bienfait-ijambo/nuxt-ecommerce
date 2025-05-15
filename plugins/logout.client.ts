export default defineNuxtPlugin({
    name: 'logout',
    parallel: true,
    async setup(nuxtApp) {
        // the next plugin will be executed immediately
        nuxtApp.provide('logout', () => {
            const userCookie = useCookie('user', userCookieSettings);
            userCookie.value = null
            window.location.href = '/auth/signin'
        })
    }
})

