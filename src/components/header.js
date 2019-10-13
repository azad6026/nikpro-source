import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import "../styles/layout.css"

const Header = props => (
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

export default Header
