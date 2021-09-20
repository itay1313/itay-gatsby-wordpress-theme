import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import MainNav from "./mainNav"

const Header = ({ siteTitle, siteDescription, siteURL }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>{siteDescription}</p>
      <p>url is: {siteURL}</p>
      <button className="btn btn-primary">DaisyUI Button</button>
    </div>
    <MainNav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
