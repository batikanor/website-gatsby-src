import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from "../components/head"





const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
 
        allContentfulBlogPost(
          sort: { 
            fields: createdAt,
            order: DESC
          }) {
          edges {
            node {
                title
                slug
                description
                createdAt(formatString: "D. MMMM, YYYY - HH:mm")
                updatedAt(formatString: "D. MMMM, YYYY - HH:mm")
                tags
            }
          }
        }

      }
      
`)


    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <p>There were two options to add a searching feature to this website: API-based search engines or local searching offline. I chose neither, please use the search functionality of your browser. Browsers without one are simply not supported.</p>
            <ol className={blogStyles.blogPosts}>
                {data.allContentfulBlogPost.edges && data.allContentfulBlogPost.edges.map((edge) => {
                   //let color = 'red';
                    return (
                        <>
                            <article>
                                <hr/>
                                <li className={blogStyles.blogPost}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                        <div>

                                        
                                        <ul className={blogStyles.blogPostTags}>
                                                {
                                                   
                                                    edge.node.tags.map((tag) => {
                                                    
                                                    return ( <li className={blogStyles.blogPostTag}>{tag}</li> )
                                                    })
                                                }
                                        </ul>
                                        </div>
                                        
                                        <em className={blogStyles.blogPostDescription}>{edge.node.description}</em>
                                        <p>

                
                                            
                                            <em> Created: {edge.node.createdAt}</em>
                                            <br/>
                                            <em> Updated: {edge.node.updatedAt}</em>
                                            

                                        
                                        </p>
                                    </Link>

                                </li>
                            </article>
                        </> // why? https://stackoverflow.com/questions/54917974/why-i-cant-use-a-hr-tag-outside-another-tag-in-reactjs
                    )
                })}
            </ol>

        </Layout>
        )
}
export default BlogPage //< If you don't export the component, gatsby can not access it