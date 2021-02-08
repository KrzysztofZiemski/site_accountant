import React from "react"
import { ContactForm } from "../components/ContactForm/ContactForm"

import Layout from "../layouts/layout"
import { OfferServices } from "../components/OfferServices/OfferServices"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <OfferServices />
    <ContactForm />
  </Layout>
)

export default IndexPage
