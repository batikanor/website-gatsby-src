import React from "react" //< React is already installed as part of our gatsby project
import { Link } from 'gatsby'

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm Batikan</h2>
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