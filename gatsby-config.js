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
    `gatsby-plugin-recaptcha`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `MonTserrat`, `Roboto`,
          `source sans pro\:300,400,400i,700`
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icon-manifest.png`,
      },
    },
  ],
}
