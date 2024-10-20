import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FaBars, FaTimes } from 'react-icons/fa'
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

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
                <p className={headerStyles.subtitle}>{data.site.siteMetadata.author}</p>
            </h1>

            <div className={headerStyles.navDiv}>
                <nav className={menuOpen ? `${headerStyles.nav} ${headerStyles.navOpen}` : headerStyles.nav}>
                    <ul className={headerStyles.navList}>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/cv">CV</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link></li>
                        <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/demo">Demo</Link></li>
                    </ul>
                </nav>
                <div className={headerStyles.hamburger} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    )
}

export default Header
