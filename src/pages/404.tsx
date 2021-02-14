import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Strona nie istnieje.</p>
  </Layout>
)

export default NotFoundPage
