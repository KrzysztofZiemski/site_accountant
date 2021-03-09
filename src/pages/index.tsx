import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import { ClientsOpinions } from "../components/ClientsOpinions/ClientsOpinions"
import { OfferServices } from "../components/OfferServices/OfferServices"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"

import Events from "../components/Events/Events"
import { Header } from "../components/Header/Header"
import { LatestArticles } from "../components/LatestArticles/LatestArticles"

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
      <ClientsOpinions />
      <Events />
      <LatestArticles />
    </Layout>
  )
}

export default IndexPage
