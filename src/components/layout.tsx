import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header/Header"
import { Navigation } from "./Navigation/Navigation"
import { Footer } from "./Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title: string = data.site.siteMetadata?.title || `księgowość`

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Header siteTitle={title} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
