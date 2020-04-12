module.exports = {
  siteMetadata: {
    title: 'Batbayar Sukhbaatar',
    description: 'Batbayar Sukhbaatar is fullstack web developer who loves to learn everything related to application development',
    author: '@batbayar_su',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Batbayar Sukhbaatar`,
        short_name: `Batbayar`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#34BBFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
  ],
}
