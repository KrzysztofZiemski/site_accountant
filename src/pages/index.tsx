import React from "react"
import { ContactForm } from "../components/ContactForm/ContactForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    main
    <ContactForm />
  </Layout>
)

export default IndexPage
