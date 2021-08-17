import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostList from "../components/PostList"

const Sidebar = () => (
  <div className="mt-5">
    <div className="card mb-3">
      <div className="card-header">
        <h5>Featured Post</h5>
      </div>
      <div className="card-body">
        <StaticQuery
          query={graphql`
            {
              allMarkdownRemark(
                limit: 4
                sort: { fields: id }
                filter: { frontmatter: { type: { eq: "blog" } } }
              ) {
                edges {
                  node {
                    frontmatter {
                      path
                      title
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const _ = require("lodash")
            const randomizePost = data.allMarkdownRemark.edges.map(post => {
              const { title, path } = post.node.frontmatter
              return (
                <PostList key={`${title}`} title={title} path={path}></PostList>
              )
            })
            let result = _.sampleSize(randomizePost, 4)
            return <ul className="list-group post-list">{result}</ul>
          }}
        />
      </div>
    </div>
    {/* Division */}
    <div>
      <h3>Support Us</h3>
      <div className="card bg-light" style={{ marginBottom: "1rem" }}>
        <div className="card-body">
          <a
            type="link"
            className="container-fluid btn btn-info text-white"
            href="https://nnh.neocities.org/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z/index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa fa-heart" /> Zombie Beraksi
          </a>
          <a
            type="link"
            className="container-fluid btn btn-warning mt-2"
            href="https://banter.co.vu/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa fa-flag" /> Banter
          </a>
          <a
            type="link"
            className="container-fluid btn btn-info text-white"
            href="https://mringgani.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa fa-flag" /> Mringgani
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Sidebar
