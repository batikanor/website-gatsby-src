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

        // Old cv from creddle
        //<iframe className={cvStyles.cv}  title="English CV" src="https://resume.creddle.io/embed/ijqcr0r5bf1" width="100%" height="100%" seamless></iframe>
        

        // Default embedded from Google Docs
        //<h2 class={cvStyles.cvCaption}>English <a href="https://docs.google.com/document/d/e/2PACX-1vTI_n0Epv5KdWd5cO9d_78Lbvzvpb2gN7IqtrOPrYEpLHBd9islycKCqAk3BoDcH0fEOMzypmLvVQan/pub?embedded=true" target="_blank" rel="noreferrer"> (Click for fullscreen)</a> <a href="https://www.batikanor.com/l/cv/en" target="_blank" rel="noreferrer"> (Click for PDF)</a> </h2>


        <Layout>
            <Head title="CV"/>
            <h1>CV</h1>
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <hr/>
            <p>My Resume in English, German and Turkish are accesible below. If you want a more detailed one please <Link to="/contact">Contact me!</Link> </p>
            <h2 class={cvStyles.cvCaption}>English <a href="/l/cv/en/fullscreen" target="_blank" rel="noreferrer"> (Click for fullscreen)</a> <a href="/l/cv/en" target="_blank" rel="noreferrer"> (Click for PDF)</a> </h2>
            <div className={cvStyles.cvDiv}> 
            <iframe className={cvStyles.cv} title="English CV" width="100%" height="100%" seamless src="/l/cv/en/embed"></iframe>

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