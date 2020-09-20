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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-178488694-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        //head: false,
        // Setting this parameter is optional
        //anonymize: true,
        // Setting this parameter is also optional
        //respectDNT: true,
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        //pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        //defer: false,
        // Any additional optional fields
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      },
    },
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
