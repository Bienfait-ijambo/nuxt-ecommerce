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


  nodemailer: {
    from: '"E-commerce app" <noreply@app.com>',
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_TRAP_USER,
      pass: process.env.MAIL_TRAP_PASSWORD
    },
  },


  runtimeConfig: {

    //private: is accessible only on the server
    JWT_TOKEN_KEY: process.env.JWT_TOKEN_KEY,
    REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    public: {
      // public:is accessible on server and client
      FALL_BACK_IMG_URL:process.env.FALL_BACK_IMG_URL,
      DEFAULT_USER_AVATAR:process.env.DEFAULT_USER_AVATAR

    },

  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  
  image: {
    // Options
  },
  icon: {
    mode: 'css',
    cssLayer: 'base',
    
  },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },

  tailwindcss: { exposeConfig: true },
  modules: [
    '@nuxtjs/tailwindcss',
    "@prisma/nuxt",
    '@pinia/nuxt',
    'nuxt-nodemailer',
    '@nuxt/image',
    '@nuxt/icon',
    '@unlok-co/nuxt-stripe'
  ],
   stripe: {
    // Server
    server: {
      key: process.env.STRIPE_SECRET_KEY,
      options: {
        
      },
    },
    client: {
      key: process.env.STRIPE_PUBLIC_KEY,
      options: {},
    },
  },

})