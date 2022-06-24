// https://regenrek.com/posts/how-to-use-tailwind-css-with-nuxt/
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  theme: {

    extend: {
     fontFamily: {
        Montserrat: ['Montserrat'],
        Raleway   : ['Raleway'],
      },

      fontSize: {
        'upperxs': '.65rem',
        'lowerxs': '.55rem',
        'text-sm': '0.75rem'
      },

      lineHeight: {
        'leading-2': '.80rem',
        'leading-1': '.60rem',
       },
      //azul              : '#20286d'
      colors: {
        amarillo          : '#FFFD7C',
        azul              : '#002C76',
        azulBackGroundForm: '#16182f',
        azulClaro         : '#286090',
        celeste           : '#2E9AFE',
        celesteClaro      : '#00b4e9',
        gris              : '#EAEAEA',
        rojo              : '#FF0000',
        verde             : '#1EFF37',
        verdeOscuro       : '#008f39',
        calendarioAmarillo: '#FCFCE5',
        calendarioVerde   : '#8DFB41'
      },
      
     
    },
  },
  variants: {},
  plugins: [],
}
