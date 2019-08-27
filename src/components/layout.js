import React from "react"
import { Link } from "gatsby"

import '../styles/layout.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    // if (location.pathname === rootPath) {
      header = (
        <>
            <nav>
              <ul>
                <li className="menu-list-item">
                  <Link to="/" className="menu-item-link">
                    Home
                </Link>
                </li>
              </ul>
            </nav>
        </>
      )

    // }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `80vw`,
        }}
      >
        <p 
        style={{
          background: `tomato`,
          padding: `1rem`,
          textAlign: `center`
        }}
        >The site is getting a new look in Gatsbyjs. Please bare with us.</p>
        <header>{header}</header>
        <main 
        >{children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
