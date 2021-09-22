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
      }}
    >
      <div className="navbar flex justify-between px-2 mx-2 shadow-lg">
        <div>
          <h1 style={{ margin: 0 }}>
            <Link
              className=""
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
          {/* <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
