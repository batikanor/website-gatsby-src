import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const ContactPage = () => {
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

        </Layout>
        )
}
export default ContactPage