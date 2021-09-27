import React from "react"

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import AboutMe from "../components/home/about"
import Pricing from "../components/Pricing"
// import RecentPosts from "../components/home/recentPosts"

// homepage

const IndexPage = ({ data }) => {
  const posts = data.allWpPost.nodes
  console.log({ data })
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />

      <div className="recentposts px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2>Recent Posts</h2>
        <div className="mb-10 border-t border-b divide-y">
          {posts.map((post, index) => (
            <article className="grid py-8 sm:grid-cols-4" key={index}>
              <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                  <Link
                    className="inline-block text-secondary transition-colors duration-200 hover:text-deep-purple-accent-700"
                    to={`/posts${post.uri}`}
                  >
                    <h2 className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                      {post.title}
                    </h2>
                  </Link>
                  <div
                    className="text-secondary-content"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div>
                    Tagged:{" "}
                    {post.tags.nodes.map((tag, index) => [
                      index > 0 && ", ",
                      <Link key={index} to={tag.link}>
                        {tag.name}
                      </Link>,
                    ])}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/posts"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            See all articles
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
      <AboutMe />

      {/* <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/posts/">Go to Posts</Link> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allWpPost(limit: 3) {
      nodes {
        date
        databaseId
        excerpt
        uri
        slug
        title
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
        tags {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`
