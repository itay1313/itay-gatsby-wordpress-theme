import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/home/hero"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <div
        style={{
          maxWidth: `80rem`,
          padding: "1rem",
          gap: "1rem",
          margin: "0 auto",
        }}
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </div>
    </Layout>
  </div>
)

export default IndexPage
