import React from 'react'
import { Link } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from '../components/layout'
import Head from "../components/head"

export const query = graphql`
query {
    site {
        siteMetadata {
            url
        }
    }
}`


const ContactPage = ( props ) => {
    let disqusConfig = {
        title: `contact`,
        identifier: `contact`,
        url: `${props.data.site.siteMetadata.url} + /contact`
    }
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact me</h1>
            <ul>
                <li>
                    Email: <a href="mailto: batikanor@gmail.com?subject=Batikanor Website Feedback&body=I've found this email adress from your homepage.">batikanor@gmail.com</a>
                </li>
                <li>
                    Telegram: <Link to="http://t.me/batikanor">t.me/batikanor</Link>
                </li>
            </ul>
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <Disqus config={disqusConfig}/>

        </Layout>
        )
}
export default ContactPage