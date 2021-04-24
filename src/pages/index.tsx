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
import HowCanIHelp from "../components/HowCanIHelp/HowCanIHelp"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { SubTitle } from "../components/HeaderComponent/SubTitle/SubTitle"
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent"

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

      <HowCanIHelp />
      <Events />
      <ClientsOpinions />
      <LatestArticles />
      <div className="p-4">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default IndexPage
