import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"


const CVPage = () => {
    return (
        <Layout>
            <Head title="CV"/>
            <p>My Resume in English, German and Turkish are accesible below. If you want a more detailed one please <Link to="/contact">Contact me!</Link> </p>
            <h2>English</h2>
            <iframe title="English CV" src="https://resume.creddle.io/embed/ijqcr0r5bf1" width="850" height="1100" seamless></iframe>
            <h2>German</h2>
            <p>NOT UP TO DATE</p>
            <h2>Turkish</h2>
            <p>NOT UP TO DATE</p>
        </Layout>
        )
}
export default CVPage