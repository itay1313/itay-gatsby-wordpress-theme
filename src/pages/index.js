import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import AboutMe from "../components/home/about"
import Pricing from "../components/Pricing"
import RecentPosts from "../components/home/recentPosts"

// homepage
const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <AboutMe />
      <RecentPosts />
      <Pricing />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/posts/">Go to Posts</Link>
    </Layout>
  </div>
)

export default IndexPage
