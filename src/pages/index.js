import React from "react" //< React is already installed as part of our gatsby project
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Main Page"/>
      <h1>Hello,</h1>
      <h2>I'm <abbr title="Pronounced Buh - th - cun">Batıkan</abbr> and this is my homepage.</h2>
      <p>The fourth letter of my name "ı" (i without a dot) is pronounced the way "e" is pronounced while saying "folder"</p>
      <ul>
        <p>On this website you can:</p>
        <li>Read my <Link to="/blog">blog posts</Link></li>
        <li>Read my <Link to="/cv">Resume</Link></li>
        <li>See my <Link to="/contact">contact info</Link></li>
        <li>Learn about <Link to="/projects">the projects</Link> I've been involved in.</li>
      </ul>
      <p>To learn more about me <Link to="/about">click here</Link></p>
        
      
    </Layout>

    )
    // Do not use 
    //<p>See about me: <a href="/about">here</a></p>
    // To link between pages, because it will refresh the whole page, causing a reload import Link from gatsby npm module
}

export default IndexPage

/*
export default function Home() {
  return <div>Under Development!</div>
}
*/