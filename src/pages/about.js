import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>
                I'm a Computer Engineering (But more like computer science) student at the Turkish-German University in Istanbul-Turkey in his 3. Year.
            </p>
            <p>If you wish to acquire more info about me, check <Link to="/cv">My CV</Link> out! </p>
        </Layout>
        )
}
export default AboutPage