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
      colors: {
        amarillo: '#F8AF3C',
        azul    : '#272C6B',
        gris    : '#D3500A',
        rojo    : '#E74A25',
        verde   : '#2ECC71',
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
