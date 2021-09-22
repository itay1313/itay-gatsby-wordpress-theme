import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import AboutMe from "../components/home/about"

// homepage
const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutMe />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  </div>
)

export default IndexPage
