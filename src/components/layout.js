import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.background}>

            
            
            <div className={layoutStyles.container}>

                <div className={layoutStyles.content}>
                <Header />
                {props.children}
                </div>

            </div>
            <div className={layoutStyles.logos}>
                <a  href="https://www.linkedin.com/in/batikanor/" target="_blank"  >
                    <img className={layoutStyles.logo} src="https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"></img>
                </a>
                <a href="https://www.github.com/batikanor">
                    <img className={layoutStyles.logo} src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"></img>
                </a>
            </div>
            <Footer />

        </div>
    )
}
export default Layout