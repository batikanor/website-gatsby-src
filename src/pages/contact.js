import React from 'react'
import { graphql } from 'gatsby'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { trackCustomEvent, OutboundLink } from 'gatsby-plugin-google-analytics'



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
                    Email: <OutboundLink href="mailto: batikanor@gmail.com?subject=Batikanor Website Feedback&body=I've found this email address from your homepage.">batikanor@gmail.com</OutboundLink>
                </li>
                <li>
                    Telegram: <OutboundLink href="http://t.me/batikanor" target="_blank" >t.me/batikanor </OutboundLink>
                </li>
                <li>
                    LinkedIn: <OutboundLink href="https://www.linkedin.com/in/batikanor/" target="_blank" >linkedin.com/in/batikanor </OutboundLink>
                </li>
                <li>
                    Submit a form that will be emailed to me (There is a spam filter, your post may not reach me):
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
                            <button type="submit" onClick={e => {
                                //e.preventDefault() //< I need additional js to make this work right with netlify
                                trackCustomEvent({
                                    category: 'Form Filling',
                                    action: 'click',
                                    label: 'Netlify contact form',
                                })
                            }}>Send</button>
                        </p>

                    </form> 

                </li>

            </ul>

            
            <Disqus config={disqusConfig}/>
        </Layout>
        )
}
export default ContactPage