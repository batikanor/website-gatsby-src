import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import blogStyles from './blog.module.scss'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`)
    return (
        <Layout>

            <h1>Blog</h1>
            <ol className={blogStyles.blogPosts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.blogPost}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>

                            </Link>

                        </li>
                    )
                })}
            </ol>

        </Layout>
        )
}
export default BlogPage //< If you don't export the component, gatsby can not access it