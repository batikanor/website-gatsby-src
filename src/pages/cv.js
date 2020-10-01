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


const CVPage = ( props ) => {
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
            <hr/>
            <p>My Resume in English, German and Turkish are accesible below. If you want a more detailed one please <Link to="/contact">Contact me!</Link> </p>
            <h2 class={cvStyles.cvCaption}>English <a href="https://resume.creddle.io/resume/ijqcr0r5bf1" target="_blank" rel="noreferrer"> (Click for fullscreen)</a></h2>
            <div className={cvStyles.cvDiv}>
                <iframe className={cvStyles.cv}  title="English CV" src="https://resume.creddle.io/embed/ijqcr0r5bf1" width="100%" height="100%" seamless></iframe>

            </div>
            <h2>German</h2>
            <p>NOT UP TO DATE</p>
            <h2>Turkish</h2>
            <p>NOT UP TO DATE</p>
            <hr/>
            <a id="advise"/>
            <Disqus config={disqusConfig}/>
        </Layout>
        )
}
export default CVPage