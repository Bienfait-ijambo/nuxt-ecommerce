// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  mail: {
    message: {
      to: 'ijamboizuba20@gmail.com',
    },
    smtp: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_TRAP_USER,
        pass: process.env.MAIL_TRAP_PASSWORD
      }
    },

    
  },


  runtimeConfig: {
    //private: is accessible only on the server
    JWT_TOKEN_KEY: process.env.JWT_TOKEN_KEY,
    REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    public: {
      // public:is accessible on server and client

    },

  },
  
  modules: ['@nuxtjs/tailwindcss', "@prisma/nuxt", '@pinia/nuxt','nuxt-mail']
  
})