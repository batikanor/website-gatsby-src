import React from 'react'
import { Link, graphql } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from '../components/layout'
import Head from "../components/head"
import contactStyles from './contact.module.scss'
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
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <hr/>
            <ul>
                <li>
                    Email: <a href="mailto: batikanor@gmail.com?subject=Batikanor Website Feedback&body=I've found this email address from your homepage.">batikanor@gmail.com</a>
                </li>
                <li>
                    Telegram: <Link to="http://t.me/batikanor">t.me/batikanor</Link>
                </li>
                <li>
                    Submit a form that will be emailed to me:
                    <form className={contactStyles.netlifyForm} name="submitContact" method="POST" netlify-honeypot="bot-field" action="/" data-netlify="true">
                        <input type="hidden" name="form-name" value="submitContact"/>
                        <p>
                            <label>Your Name: <br/> <input type="text" name="name" size="40" /></label>
                        </p>
                        <p>
                            <label>Content: <br/> <textarea name="content" cols="40" rows="5"></textarea> </label>
                        </p>
                        <p className={contactStyles.netlifyFormBotField}>
                            <label>This shouldn't be filled out: <input name="bot-field"></input></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>

                    </form> 
                </li>
            </ul>

            
            <Disqus config={disqusConfig}/>
        </Layout>
        )
}
export default ContactPage