/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = { //< Because this is a node.js file
  siteMetadata: {
    title: 'Batikanor',
    author: 'Batıkan Bora ORMANCI',
    url: 'http://www.batikanor.com',
    basepath: '/'
  },

  plugins: [
    {
      resolve: 'gatsby-source-notionso',
      options: {
        name: 'Blog',
        rootPageUrl:
          'https://www.notion.so/Publicized-Notes-f2c37c9904a3431b82df56035c769574',
        debug: false,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-local-search',
    //   options: {
    //     // A unique name for the search index. This should be descriptive of
    //     // what the index contains. This is required.
    //     name: 'pages',

    //     // Set the search engine to create the index. This is required.
    //     // The following engines are supported: flexsearch, lunr
    //     engine: 'flexsearch',

    //     // Provide options to the engine. This is optional and only recommended
    //     // for advanced users.
    //     //
    //     // Note: Only the flexsearch engine supports options.
    //     engineOptions: 'speed',

    //     // GraphQL query used to fetch all data for the search index. This is
    //     // required.
    //     query: `
    //       {
    //         allContentfulBlogPost {
    //           edges {
    //               node {
    //                   slug
    //                   title
    //                   description
    //               }
    //           }
    //       }
            
    //     `,

    //     // Field used as the reference value for each document.
    //     // Default: 'id'.
    //     ref: 'slug',

    //     // List of keys to index. The values of the keys are taken from the
    //     // normalizer function below.
    //     // Default: all fields
    //     index: ['title', 'description'], 

    //     // List of keys to store and make available in your UI. The values of
    //     // the keys are taken from the normalizer function below.
    //     // Default: all fields
    //     store: ['slug', 'title', 'description'],

    //     // Function used to map the result from the GraphQL query. This should
    //     // return an array of items to index in the form of flat objects
    //     // containing properties to index. The objects must contain the `ref`
    //     // field above (default: 'id'). This is required.
    //     normalizer: ({ data }) =>
    //       data.allContentfulBlogPost.edges.map(node => ({
    //         slug: node.slug,
    //         title: node.title,
    //         description: node.description,
    //       })),
    //   },
    // },
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
