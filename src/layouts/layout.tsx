import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "../components/Header/Header"
import { Navigation } from "../components/Navigation/Navigation"
import { Footer } from "../components/Footer/Footer"

type LayoutProps = {
  children: any
  includeHeader: boolean
}

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
      {includeHeader ? <Header siteTitle={title} /> : null}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
Layout.defaultProps = {
  includeHeader: true,
}

export default Layout
