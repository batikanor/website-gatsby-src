const path = require('path')



module.exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog-post.js')
    
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug

                    }
                }
            }
            
            site {
                siteMetadata {
                    url
                }
            }
            
               
        }
    
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
  
}
exports.createPages = async ({ graphql, actions, reporter }, options) => {
    const { createPage } = actions;
  
    const pageTemplate = require.resolve('./src/templates/page.js');
  
    const result = await graphql(
      `
        query {
          allNotionPageBlog {
            edges {
              node {
                pageId
                slug
              }
            }
          }
        }
      `,
    );
    if (result.errors) {
      reporter.panic('error loading events', result.errors);
      return;
    }
  
    result.data.allNotionPageBlog.edges.forEach(({ node }) => {
      const path = `/gatsby-source-notion-so/${node.slug}`;
      createPage({
        path,
        component: pageTemplate,
        context: {
          pathSlug: path,
          pageId: node.pageId,
        },
      });
    });
  };