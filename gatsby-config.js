/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = { //< Because this is a node.js file
  siteMetadata: {
    title: 'Batikanor',
    author: 'Batıkan Bora ORMANCI'
  
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`], // ignore files starting with a dot

      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: true
            }

          }
        ]
      }
    }
  ],
}
