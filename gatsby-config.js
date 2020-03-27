module.exports = {
  siteMetadata: {
    title: "Liz Tiller - Portfolio",
    author: "Liz Tiller",
    description: "Portfolio website for Javascript Developer Liz Tiller",
    siteUrl: `http://www.elizabethtiller.com`
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`librebaskerville`, `open sans`]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
};
