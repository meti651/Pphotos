/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Fotózás | Pphotos",
    description: "Fotózás egész Magyarország területén. Gyerek-, kisbaba-, család-, portré-, kismama-, esküvői fotózás Budapesten vagy akár az egész országon belül.",
    baseUrl: "https://www.pphotos-official.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `merriweather`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    
  ],
}
