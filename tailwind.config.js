module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'MonTserrat': [`MonTserrat`, 'Open Sans']
    },
    extend: {
      maxHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/3': '1/4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
