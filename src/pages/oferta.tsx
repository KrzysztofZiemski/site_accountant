import React, { useMemo } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"

//@ts-ignore

import { TableOffer } from "../components/TableOffer/TableOffer"
import { OfferPromotion } from "../components/OfferPromotion/OfferPromotion"
import { ContactForm } from "../components/ContactForm/ContactForm"
export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "oferta" }) {
      namePage
      title
      description
    }
  }
`

const OfferPage = ({ data }) => {
  const { title, description } = data.datoCmsMetaDataPage

  return (
    <Layout>
      <SEO title={title || "Offer"} description={description || ""} />
      <SiteTitle>Cennik</SiteTitle>
      <div className="p-2 mx-auto text-secondary leading-6	mb-2">
        <OfferPromotion className="mb-4 sm:mb-6 md:mb-8" />
        <TableOffer />
      </div>
    </Layout>
  )
}

export default OfferPage
