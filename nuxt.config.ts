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
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "4b0b4fbeab98bf",
        pass: "1b0802bdf386eb"
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
  
  modules: ['@nuxtjs/tailwindcss', "@prisma/nuxt", '@pinia/nuxt', 'nuxt-mail']
})