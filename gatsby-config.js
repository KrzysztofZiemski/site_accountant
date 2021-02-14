require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Magfi księgowość - Magdalena Pol`,
    description: `Księgowość online, pomoc rachukowa, kadry i płace Magdalena Pol`,
    author: `@Magdalena Pol`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`, `Roboto`, `Lato`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magfi księgowość - Magdalena Pol`,
        short_name: `Magfi`,
        start_url: `/`,
        background_color: `#2CAFE6`,
        theme_color: `#2CAFE6`,
        display: `minimal-ui`,
        icon: `src/assets/icon-manifest.png`,
      },
    },
  ],
}
