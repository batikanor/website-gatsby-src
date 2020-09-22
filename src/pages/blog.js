import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from "../components/head"
import { Formik, Form, Field } from 'formik'





const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        localSearchPages {
            index
            store
        }
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

const { index, store } = data.localSearchPages
const [query, setQuery] = useState("")
const results = useFlexSearch(query, index, store)
    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <div>
                <Formik
                    initialValues={{ query: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                    setQuery(values.query)
                    setSubmitting(false)
                    }}
                >
                    <Form>
                    <Field name="query" />
                    </Form>
                </Formik>
                <h1>Results</h1>
                <ul>
                    {results.map(result => (
                    <li key={result.slug}>{result.title}</li>
                    ))}
                </ul>
            </div>
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