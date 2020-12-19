import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"


const NotFound = () => {


    return (
        <Layout>
            <Head title="404"/>
            <h1> 404 Page Not Found  </h1>
            <p><Link to="/">Go back to Main Page</Link></p>
            <hr/>
            <p>There may be several reasons why you've found yourself here. I redirect people to this page for almost every wrong-doing these days. You may've used a wrong type of input on some of my web-based projects, or just have typed a false url while trying to access a portion of one of my sites.</p>

            <p>It is OK though, try again.</p>


            <ol>
                <li>If you were trying to access a link, you can try putting "/l/" or "/link/" in front of it. <p> E.g. batikanor.com/tau --> batikanor.com/l/tau</p>
                </li>
            </ol>
        </Layout>
    )
}

export default NotFound