const { colors } = require('./src/styles/colors')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'MonTserrat': [`MonTserrat`, 'Open Sans']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': colors.mainColor,
      'secondary': colors.secondaryColor
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': colors.mainColor,
      'secondary': colors.secondaryColor
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': colors.mainColor,
      'secondary': colors.secondaryColor
    }),
    ringColor: theme => ({
      ...theme('colors'),
      'primary': colors.mainColor,
      'secondary': colors.secondaryColor
    }),
    extend: {
      height: {
        '1/2screen': '50vh'
      },
      maxHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/3': '1/4',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '10': '10rem',
      },
      minWidth: {
        '475px': '475px'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'active'],
      pointerEvents: ['hover', 'focus', 'active'],
      ringWidth: ['active', 'focus', 'hover'],
      ringColor: ['active', 'focus', 'hover'],
      opacity: ['hover'],
      boxShadow: ['active', 'hover'],
    },
  },
  plugins: [],
}
