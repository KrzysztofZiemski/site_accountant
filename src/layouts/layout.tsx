import React, { Suspense } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CookiesProvider } from "react-cookie"
import { Header } from "../components/Header/Header"
import { Navigation } from "../components/Navigation/Navigation"
import { Footer } from "../components/Footer/Footer"
//  On 28.09.2024 disable custom cookie and add external tool by tag manager
// import { CookieBanner } from "../components/CookieBanner/CookieBanner"

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
    <>
      <CookiesProvider>
        {/* On 28.09.2024 disable custom cookie and add external tool by tag manager */}
        {/* <CookieBanner /> */}
        <div className="flex flex-col" style={{ minHeight: "100vh" }}>
          <Navigation />
          <main
            className="flex flex-col flex-grow m-auto mb-8 md:mb-16 w-full"
            style={{ maxWidth: "1280px" }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </CookiesProvider>
    </>
  )
}
Layout.defaultProps = {
  includeHeader: true,
}

export default Layout
