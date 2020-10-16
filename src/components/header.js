import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    
    query {
        site {
            siteMetadata {
                title
                author
            }
        }
    } 
    
    `)
  
    return (
        <header className={headerStyles.header}>
            <h1>
            <Link className={headerStyles.title} to="/">
                {data.site.siteMetadata.title} 
                <p className={headerStyles.subtitle}>{data.site.siteMetadata.author}</p>
            </Link>
            </h1>
            <div className={headerStyles.navDiv}>
                <nav className={headerStyles.nav}>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/">Home</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/about">About</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/cv">CV</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/contact">Contact</Link>
                        </li>                    
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/projects">Projects</Link>
                        </li>                    
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to = "/demo">Demo</Link>
                        </li>      
                    </ul>
                </nav>
            </div>
            <br/>
           
        </header>
    )
}
export default Header