import dotenv from "dotenv"; dotenv.config();
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cripack S.A.S.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui' },
      { name: 'keywords', content: '' },
      { hid: 'http-equiv', name: 'http-equiv', content: 'text/html' },
      { hid: 'http-equiv', name: 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/020bc864c9.js'
      },
    ],
        
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap',
      },
    ]
  },
    env: {
     
      URL_BASE: process.env.URL_BASE,
      URL_API: process.env.URL_API,
      URL_WEB: process.env.URL_WEB,
      URL_RESET_PASS: process.env.URL_RESET_PASS,
  },
    

  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
      '@/assets/css/transitions/intro.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-easytable.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/auth-next',
    '@nuxtjs/fontawesome'
  ],

  auth: { 
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.URL_API,
        endpoints: {
          login: {
              url:'/login',
          },
          user: {
            url: '/user',
          },
          logout: {
            url:'/logout'
          }
        }
      },
    },
    
  },

  fontawesome: {
    icons: {
      solid: true,
      brands:true
      }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.URL_API,
    credentials: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
