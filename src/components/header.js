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
        top: "9",
        zIndex: "99",
      }}
    >
      <div className="navbar shadow-lg bg-neutral text-neutral-content dark:text-blue-navy dark:bg-neutral-content">
        <div className="flex-none px-2 mx-2">
          <h1 style={{ margin: 0 }}>
            <Link
              className="dark:bg-neutral-content"
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="flex-1 px-2 mx-2">
          <MainNav />
        </div>
        <div className="flex-none relative">
          <div style={{ position: "absolute", top: 0, right: 40 }}>
            <ThemeSwitcher theme={theme} setTheme={switchTheme} />
          </div>
          <button className="btn btn-square btn-ghost">
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
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
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
