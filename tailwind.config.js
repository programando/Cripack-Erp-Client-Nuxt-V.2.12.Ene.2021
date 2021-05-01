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
       Montserrat: ['Montserrat']
      },
      
      colors: {
        amarillo          : '#FFFD7C',
        azul              : '#20286d',
        azulBackGroundForm: '#16182f',
        azulClaro         : '#286090',
        celeste           : '#2E9AFE',
        celesteClaro      : '#00b4e9',
        gris              : '#EAEAEA',
        rojo              : '#FF0000',
        verde             : '#1EFF37',
      },
      fontFamily: {
        rale: 'Raleway',
        robo: 'Roboto',
        latos: 'Lato'
      }
     
    },
  },
  variants: {},
  plugins: [],
}
