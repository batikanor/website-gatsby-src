import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'


import Layout from '../components/layout'
import Head from "../components/head"
import Search from "../components/search"

export const query = graphql`
query {
    site {
        siteMetadata {
            url
        }
    }
}`

const DemoPage = (props) => {
    let disqusConfig = {
        title: `demo`,
        identifier: `demo`,
        url: `${props.data.site.siteMetadata.url} + /demo`
    }
    return (
        <Layout>
            <Head title="Demo"/>
            <h1>Demo (Testing)</h1>
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <hr/>
            <p>
                I will be testing some things in here. No need to look ...
            </p>
            <Search />
            


            <Disqus config={disqusConfig}/>
        </Layout>
        )
}
export default DemoPage