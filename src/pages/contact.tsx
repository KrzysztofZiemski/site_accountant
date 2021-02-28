import { graphql } from "gatsby"
import React from "react"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { ContactInfo } from "../components/ContactInfo/ContactInfo"
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
      <SiteTitle>Kontakt</SiteTitle>
      <div className="px-2 mt-4 md:mt-8 lg:mt-16 text-1xl text-center lg:text-2xl lg:mb-9">
        <p className="text-2xl mb-4 lg:text-3xl">W czym mogę Ci pomóc?</p>
        <p>Z przyjemnością odpowiem na wszelkie Twoje pytania.</p>
      </div>
      <div className="p-3 flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="flex flex-col mx-auto lg:ml-9  md:m-0">
          <ContactInfo />
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm id="contact" />
        </div>
      </div>

      <GoogleMap className="w-full mx-auto h-64 md:h-96 lg:h-1/2screen "></GoogleMap>
    </Layout>
  )
}

export default contact
