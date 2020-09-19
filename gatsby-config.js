/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = { //< Because this is a node.js file
  siteMetadata: {
    title: 'Batikanor',
    author: 'Batıkan Bora ORMANCI',
    url: 'http://www.batikanor.com'
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
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'batikanor'
      }
    },
  //   {
  //     resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
  //     options: {
  //       // Fields to index
  //       fields: [
  //         `title`,
  //         `tags`
  //       ],
  //       // How to resolve each field`s value for a supported node type
  //       resolvers: {
  //         // For any node of type MarkdownRemark, list how to resolve the fields` values
  //         ContentfulProduct: {
  //           title: node => node.title,
  //           tags: node => node.tags,
  //           path: node => `/blog/${node.slug}`,
  //         },
  //       },
  //       // Optional filter to limit indexed nodes
  //       //filter: (node, getNode) => node.tags !== "exempt", 
  //   }

  // }
  
  ],
}
