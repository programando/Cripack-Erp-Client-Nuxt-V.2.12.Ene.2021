import dotenv from "dotenv"; dotenv.config();
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cripack S.A.S. - WebCross',
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
      URL_BASE       : process.env.URL_BASE,
      URL_API        : process.env.URL_API,
      EMAIL_TEMP     : process.env.EMAIL_TEMP,
      EMAIL_PASS_TEMP: process.env.EMAIL_PASS_TEMP,
      NODE_ENV       : process.env.NODE_ENV
  },
    
  server: {
      port : process.env.PORT,
  },
  
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
      '@/assets/css/transitions/intro.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
     { src: '~/plugins/filters.js' },
     { src: '~/plugins/datepicker', ssr: false },
     { src: '~/plugins/i18n.js' },
     '~/plugins/clickaway',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    //'vue-sweetalert2/nuxt',
  ],

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
    ['cookie-universal-nuxt', { alias: 'cookies' }],
    'nuxt-vue-select',                                    /// https://www.npmjs.com/package/nuxt-vue-select,   https://vue-select.org/
    'vue-sweetalert2/nuxt'
  ],
  

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
 
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
