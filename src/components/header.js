import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { ThemeContext } from "gatsby-plugin-theme-switcher"
import ThemeSwitcher from "./themeSwitcher"

import MainNav from "./mainNav"

const Header = ({ siteTitle, siteDescription, siteURL }) => {
  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "99",
        backgroundColor: "var(--primary)",
        marginBottom: "-4rem",
      }}
    >
      <div className="navbar flex justify-between px-2 mx-2 shadow-lg">
        <div>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="flex-1 px-2 mx-2 sm:hidden">
          <MainNav />
        </div>
        <div className="relative">
          <div
            style={{
              right: 0,
              whiteSpace: "nowrap",
            }}
          >
            <ThemeSwitcher theme={theme} setTheme={switchTheme} />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  // siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  // siteDescription: ``,
}

export default Header
