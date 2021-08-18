import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/index.scss"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Sidebar from "../parts/Sidebar"

export default function bioTemplate({ data }) {
  const post = data.markdownRemark
  const {
    title,
    email,
    fullname,
    website,
    websitename,
    image,
  } = post.frontmatter

  return (
    <div>
      <Layout>
        <SEO title="Privacy Policy" keyword="Privacy Policy" />
        <div className="row m-2">
          <div className="col-md-8">
            <div className="post-bar">
              <h1>{title}</h1>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={image} className="card-img" alt="Privacy Policy" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Information</h5>
                      <p className="card-text">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <th scope="row">Name</th>
                              <td>{fullname}</td>
                            </tr>
                            <tr>
                              <th scope="row">Email</th>
                              <td>
                                <Link href={`mailto:${email}`}>{email}</Link>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">Website</th>
                              <td>
                                <Link to={website} target="_blank">
                                  {websitename}
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const bioQuery = graphql`
  query PrivacyPolicy($type: String = "PrivacyPolicy") {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        email
        fullname
        websitename
        website
        image
      }
      html
    }
  }
`
