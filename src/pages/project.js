import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import PostsCard from "../components/PostsCard"
import Jumbotron from "../components/Jumbotron"

export default function Project({ data }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Jumbotron
        headline="Blog"
        punchline="Blogger Palembang"
      />
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <h4>Blog List</h4>
        <PostsCard data={data.allMarkdownRemark.nodes} col={4} />
      </div>
    </Layout>
  )
}

export const IndexQuery = graphql`
  query project {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
          author
          tags
          path
          image
        }
      }
    }
  }
`
