const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Tsukiakari Academy`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-anchor-links",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/assets/images/`
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@pages": path.resolve(__dirname, 'src/pages'),
          "@scss": path.resolve(__dirname, 'src/assets/scss'),
          "@images": path.resolve(__dirname, 'src/assets/images'),
          "@utils": path.resolve(__dirname, 'src/utils')
        },
        extensions: [
          "js", "scss"
        ]
      }
    }
  ]
};
