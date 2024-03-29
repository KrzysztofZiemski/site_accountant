const { colors } = require("./src/styles/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      MonTserrat: [`MonTserrat`, "Open Sans"],
      Lato: [`Lato`, `sans-serif`],
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: colors.mainColor,
      secondary: colors.secondaryColor,
      "primary-opacity": colors.mainOpacityColor,
      "white-opacity": "rgba(255,255,255,.8)",
    }),
    textColor: theme => ({
      ...theme("colors"),
      primary: colors.mainColor,
      secondary: colors.secondaryColor,
    }),
    borderColor: theme => ({
      ...theme("colors"),
      primary: colors.mainColor,
      secondary: colors.secondaryColor,
    }),
    ringColor: theme => ({
      ...theme("colors"),
      primary: colors.mainColor,
      secondary: colors.secondaryColor,
    }),
    extend: {
      height: {
        "1/2screen": "50vh",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "active"],
      pointerEvents: ["hover", "focus", "active"],
      opacity: ["hover"],
      boxShadow: ["active", "hover"],
      textColor: ["active", "hover"],
    },
  },
  plugins: [],
}
