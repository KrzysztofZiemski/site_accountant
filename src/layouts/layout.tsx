import React, { Suspense } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "../components/Header/Header"
import { Navigation } from "../components/Navigation/Navigation"
import { Footer } from "../components/Footer/Footer"

type LayoutProps = {}

const Layout = ({ children, includeHeader }) => {
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
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <Navigation />
      <main
        className="flex flex-col flex-grow m-auto w-full"
        style={{ maxWidth: "1280px" }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
Layout.defaultProps = {
  includeHeader: true,
}

export default Layout
