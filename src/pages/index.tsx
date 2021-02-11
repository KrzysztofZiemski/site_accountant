import React from "react"
import { ContactForm } from "../components/ContactForm/ContactForm"

import Layout from "../layouts/layout"
import { OfferServices } from "../components/OfferServices/OfferServices"
import SEO from "../components/seo"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <OfferServices />
    <ContactForm id="contact" />
    <GoogleMap className="w-full mx-auto h-64 md:h-96 lg:h-1/2screen lg:w-10/12"></GoogleMap>
  </Layout>
)

export default IndexPage
