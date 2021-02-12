import React from "react"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { OfferServices } from "../components/OfferServices/OfferServices"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"
import Events from "../components/Events/Events"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <OfferServices />
    <Events />
    <ContactForm id="contact" />
    <GoogleMap className="w-full mx-auto h-64 md:h-96 lg:h-1/2screen lg:w-10/12"></GoogleMap>
  </Layout>
)

export default IndexPage
