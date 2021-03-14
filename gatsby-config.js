require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Magfi księgowość - Magdalena Pol`,
    description: `Księgowość online, pomoc rachukowa, kadry i płace Magdalena Pol`,
    author: `@Magdalena Pol`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true,
          allowAdFeatures: false,
        },
        googleTagManager: {
          trackingId: process.env.GOOGLE_TAG_MANAGER_TRACKING_ID,
          cookieName: "gatsby-gdpr-google-tagmanager",
          dataLayerName: "dataLayer",
        },
        facebookPixel: {
          pixelId: process.env.FACEBOOK_PIXEL_ID,
          cookieName: "gatsby-gdpr-facebook-pixel",
        },
        environments: ["production", "development"],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [`Montserrat`, `Roboto`, `Lato`],
        },
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true,
        ignore: ["calendar.css"],
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    },
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
