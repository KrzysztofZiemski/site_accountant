import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "oferta" }) {
      namePage
      title
      description
    }
  }
`

const OfferPage = ({ data: datoCmsMetaDataPage }) => {
  const { title, description } = datoCmsMetaDataPage
  return (
    <Layout>
      <SEO title={title || "Offer"} description={description || ""} />
    </Layout>
  )
}

export default OfferPage
