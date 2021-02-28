import { graphql } from "gatsby"
import React from "react"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"
import SEO from "../components/seo"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"
import Layout from "../layouts/layout"
//@ts-ignore
import PhoneIcon from "../assets/phone-call.svg"
//@ts-ignore
import PointerIcon from "../assets/location-pointer.svg"

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
      <div className="px-2 text-1xl text-center lg:text-2xl lg:mb-9">
        <p className="text-2xl mb-4 lg:text-3xl">W czym mogę Ci pomóc?</p>
        <p>Z przyjemnością odpowiem na wszelkie Twoje pytania.</p>
      </div>

      <div className="p-3 flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="flex flex-col mx-auto lg:ml-9  md:m-0">
          <PhoneIcon
            className="w-12 h-12 mb-4"
            style={{ marginLeft: "17px" }}
          />
          <h2 className="mb-4 text-2xl">
            <strong>Kontakt ze mną</strong>
          </h2>
          <div>
            <p>
              Telefon: <span className="text-primary">604065485</span>
            </p>
            <p>
              E-mail: <span className="text-primary">magifi@gmail.com</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-xl">Godziny pracy</p>
            <p>
              pon. - pt. w godzinach <strong>7-20</strong>
            </p>
          </div>
          <div className="mt-10">
            <PointerIcon className="w-12 h-12 mb-4" style={{ fill: "black" }} />
            <h2 className="mb-4 text-2xl">Nasze biuro</h2>
            <address>
              <p className="text-xl mb-2">
                <strong>MagFi</strong>
              </p>
              <p> 50-436 Wrocław Łukasińskiego 12-14/4</p>
              <p>NIP 9151737051</p>
              <p>REGON 380206135</p>
            </address>
          </div>
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
