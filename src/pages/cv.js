import React from 'react'
import { Link, graphql } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from '../components/layout'
import Head from "../components/head"
import cvStyles from './cv.module.scss'

export const query = graphql`
query {
    site {
        siteMetadata {
            url
        }
    }
}`

const CVPage = (props) => {
    let disqusConfig = {
        title: `cv`,
        identifier: `cv`,
        url: `${props.data.site.siteMetadata.url} + /cv`
    }

    return (
        <Layout>
            <Head title="CV"/>
            <h1>CV</h1>
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <hr />
            <p>My Resume in English, German and Turkish are accessible below. If you want a more detailed one please <Link to="/contact">Contact me!</Link> </p>

            {/* Professional looking links */}
            <h2 className={cvStyles.cvCaption}>English 
                <a className={cvStyles.cvLink} href="/l/cv/en/fullscreen" target="_blank" rel="noreferrer">Fullscreen</a> 
                <a className={cvStyles.cvLink} href="/l/cv/en" target="_blank" rel="noreferrer">Download PDF</a>
            </h2>

            {/* CV Embed - Hidden on Mobile */}
            <div className={cvStyles.cvDiv}>
                <iframe className={cvStyles.cv} title="English CV" seamless src="/l/cv/en/embed"></iframe>
            </div>

            <h2>German</h2>
            <p>NOT UP TO DATE</p>

            <h2>Turkish</h2>
            <p>NOT UP TO DATE</p>

            <hr />
            <Disqus config={disqusConfig} />
        </Layout>
    )
}

export default CVPage
