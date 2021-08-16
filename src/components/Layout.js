import React from "react"
import PropTypes from "prop-types"

import "../styles/index.scss"
import Nav from "../parts/Nav"
import Footer from "../parts/Footer"

const Layout = ({ children }) => (
  <div
    className="dendense-font"
    style={{ minHeight: "100vh", position: "relative" }}
  >
    <Nav brand="Gak Jelas" />
    <div className="container-fluid" style={{ padding: "1rem" }}>
      {children}
    </div>
    <Footer copyright="Gak Jelas" />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
