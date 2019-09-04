import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"

import "../styles/layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    // if (location.pathname === rootPath) {
    header = (
      <>
        <div className="inner-wrapper">
          <div
            style={{
              maxWidth: `150px`,
            }}
          >
            <Link to="/">
              <Image filename="nikpromainlogo.png" alt="nikpro logo" />
            </Link>
          </div>
          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-around`,
                marginBottom: 0,
              }}
            >
              <li className="menu-list-item">
                <Link to="/categories/css" className="menu-item-link">
                  CSS
                </Link>
              </li>
              <li className="menu-list-item">
                <Link to="/categories/javascript/" className="menu-item-link">
                  Javascript
                </Link>
              </li>
              <li className="menu-list-item">
                <Link to="/categories/es-6" className="menu-item-link">
                  ES6
                </Link>
              </li>
              <li className="menu-list-item">
                <Link to="/categories/react" className="menu-item-link">
                  React
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )

    // }
    return (
      <div>
        <p
          style={{
            background: `#f08b33`,
            padding: `1rem`,
            textAlign: `center`,
          }}
        >
          The site is getting a new look in Gatsbyjs. Please bare with us.
        </p>
        <header
          style={{
            background: `#0c0904`,
            padding: `1rem`,
          }}
        >
          {header}
        </header>
        <div className="inner-wrapper">
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a style={{ color: `#0c0904` }} href="https://www.gatsbyjs.org">
              Gatsby
            </a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
