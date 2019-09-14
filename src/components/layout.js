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
            background: `var(--primary-light-color)`,
            fontSize: `1rem`,
            textAlign: `center`,
          }}
        >
          The site is getting a new look in Gatsbyjs.{" "}
          <a href="mailto:azad6026@gmail.com">Send</a> me your feedbacks.
        </p>
        <a id="top"></a>
        <header
          style={{
            background: `var(--primary-dark-colour )`,
            padding: `1rem`,
          }}
        >
          {header}
        </header>
        <div className="inner-wrapper">
          <main>{children}</main>
          <footer style={{ color: `white` }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              style={{ color: `--menu-link-hover` }}
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>
          </footer>
        </div>
        <Link
          style={{
            color: `--menu-link-hover`,
            display: `flex`,
            justifyContent: `flex-end`,
            padding: `1rem`,
          }}
          to="#top"
        >
          <svg
            style={{ width: `2rem`, height: `2rem` }}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-up"
            class="svg-inline--fa fa-arrow-up fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </Link>
      </div>
    )
  }
}

export default Layout
