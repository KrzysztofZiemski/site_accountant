import React from "react"
import { graphql } from "gatsby"
import { Animate, typeAnimation } from "../components/Animate/Animate"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { Clients } from "../components/Clients/Clients"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { OfferServices } from "../components/OfferServices/OfferServices"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"

import Events from "../components/Events/Events"

export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "strona_glowna" }) {
      namePage
      title
      description
    }
  }
`

const IndexPage = ({ data: datoCmsMetaDataPage }) => {
  const { title, description } = datoCmsMetaDataPage
  return (
    <Layout>
      <SEO title={title || "Home"} description={description || ""} />
      <OfferServices />
      <Events />
      <h2 className="text-center uppercase font-bold bg-yellow-400 p-2 text-md mb-5  mx-auto">
        Zobacz co mówią nasi kliencji
      </h2>
      <Clients />
      <ContactForm id="contact" />
      <GoogleMap className="w-full mx-auto h-64 md:h-96 lg:h-1/2screen lg:w-10/12"></GoogleMap>
    </Layout>
  )
}

export default IndexPage
