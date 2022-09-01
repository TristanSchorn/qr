/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx } from "theme-ui"

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import "../assets/scss/style.scss"
import Navigation from "./navigation"

import Footer from "./footer"
import Theme from "../components/theme"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`

const Layout = ({ children, className }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <div sx={layoutStyle.nav}>
          <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
            {/* <Search searchIndex={siteSearchIndex.index} /> */}
          </div>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          {/* <Search searchIndex={siteSearchIndex.index} /> */}
          <Theme />
        </div>
      </Header>
      <main className={"container " + className}>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}