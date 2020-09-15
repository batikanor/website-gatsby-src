import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from '../components/layout'
import Head from '../components/head'


export const query = graphql`
query postQuery(
    $slug: String!
  ){
    contentfulBlogPost (slug: {eq: $slug} ) {
        title
        description
        slug
        createdAt(formatString: "D. MMMM, YYYY - HH:mm")
        body {
            json
        }
    }
    site {
        siteMetadata {
            url
        }
    }
}


  
  

` //< this will then be provided to us as a prop

const BlogPost = (props, location) => {
    

    
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {

                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
   
                return <img alt={alt} src={url} />
            }
        }
    }        
    
    let disqusConfig = {
        title: `${props.data.contentfulBlogPost.title}`,
        identifier: `${props.data.contentfulBlogPost.slug}`,
        url: ` ${props.data.site.siteMetadata.url} + /blog/ + ${props.data.contentfulBlogPost.slug} `
    }
    console.log(` ${location.href ? location.href : 'www.batikanor.com'}`)

    return (

        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>

            <article>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <em>{props.data.contentfulBlogPost.description}</em>
                
                <hr />

                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                <CommentCount config={disqusConfig} placeholder={'...'} />
                <Disqus config={disqusConfig}/>
            </article>
            
        </Layout>
    )
}
export default BlogPost

  