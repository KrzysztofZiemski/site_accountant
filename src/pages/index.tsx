import React from "react"
import { graphql } from "gatsby"
import { Animate, typeAnimation } from "../components/Animate/Animate"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { Clients } from "../components/Clients/Clients"
import { OfferServices } from "../components/OfferServices/OfferServices"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"

import Events from "../components/Events/Events"
import { Header } from "../components/Header/Header"

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
      <Header siteTitle={title} />
      <OfferServices />
      <Events />
      <h2 className="text-center uppercase font-bold bg-yellow-400 p-2 text-md mb-5  mx-auto">
        Zobacz co mówią nasi kliencji
      </h2>
      <Clients />
    </Layout>
  )
}

export default IndexPage
