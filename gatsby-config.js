module.exports = {
  siteMetadata: {
    title: `ACB Hoops League`,
    description: `2019 Winter Hoops league official schedule and stats website`,
    author: `@kcloud99`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-plugin-resolve-src",
      options: {
        addSassLoader: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `acb-hoops`,
        short_name: `hoops`,
        start_url: `/`,
        background_color: `#398488`,
        theme_color: `#398488`,
        display: `minimal-ui`,
        icon: `src/images/acb-logo-small.jpg` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`
  ]
};
