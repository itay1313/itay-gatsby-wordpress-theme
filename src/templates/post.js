import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

// css for Elementor
import "../components/Elementor/elementorStyle.scss"

import style from "./single.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Catlist from "../components/catlist"
import PostNav from "../components/postNav"
import ChildRenderer from "../components/Elementor/ChildRenderer"

export default ({ data }) => {
  console.log("itay")
  console.log(data)
  const elementorData = JSON.parse(data.thePost.elementorData)

  // console.log({ elementorData })
  const post = data.thePost
  return (
    <Layout>
      <SEO title={post.title} />
      <article className={style.article}>
        {post.featuredImage && (
          <figure className={style.featimg}>
            <Img
              fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
              alt={post.featuredImage.node.altText}
            />
          </figure>
        )}
        <Catlist postObject={post} />
        <h1 className={style.article__title}>{post.title}</h1>
        <div className={style.article__meta}>
          by {post.author.node.name}. Published{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div
          className={style.article__content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <ChildRenderer elements={elementorData} />
        <div>
          Tagged:{" "}
          {post.tags.nodes.map((tag, index) => [
            index > 0 && ", ",
            <Link
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Tag"
              key={index}
              to={tag.link}
            >
              {tag.name}
            </Link>,
          ])}
        </div>
      </article>
      <PostNav prevPost={data.prevPost} nextPost={data.nextPost} />
    </Layout>
  )
}

export const query = graphql`
  query($databaseId: Int!, $nextId: Int, $prevId: Int) {
    thePost: wpPost(databaseId: { eq: $databaseId }) {
      date
      databaseId
      elementorData
      title
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          link
          name
        }
      }
      tags {
        nodes {
          link
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    nextPost: wpPost(databaseId: { eq: $nextId }) {
      title
      uri
    }
    prevPost: wpPost(databaseId: { eq: $prevId }) {
      title
      uri
    }
  }
`
