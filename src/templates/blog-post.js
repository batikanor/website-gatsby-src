import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'


export const query = graphql`
query(
    $slug: String!
  ){
      contentfulBlogPost (slug: {eq: $slug} ) {
        title
        description
        createdAt(formatString: "D. MMMM, YYYY - HH:mm")
        body {
            json
        }
      }
  }
  
  

` //< this will then be provided to us as a prop

const BlogPost = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>

            <article>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <em>{props.data.contentfulBlogPost.description}</em>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

            </article>
            
        </Layout>
    )
}
export default BlogPost