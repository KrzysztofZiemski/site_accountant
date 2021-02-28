import { graphql } from "gatsby"
import React from "react"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"
import SEO from "../components/seo"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"
import Layout from "../layouts/layout"

export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "kontakt" }) {
      namePage
      title
      description
    }
  }
`

const contact = ({ data: datoCmsMetaDataPage }) => {
  const { title, description } = datoCmsMetaDataPage
  return (
    <Layout>
      <SEO title={title || "Articles"} description={description || ""} />
      <SiteTitle>Masz pytanie? Napisz do mnie</SiteTitle>
      <ContactForm id="contact" />
      <GoogleMap className="w-full mx-auto h-64 md:h-96 lg:h-1/2screen lg:w-10/12"></GoogleMap>
    </Layout>
  )
}

export default contact
