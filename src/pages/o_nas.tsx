import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { Button } from "../components/Button/Button"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { GoogleMap } from "../components/GoogleMap/GoogleMap"
import { ClientsOpinions } from "../components/ClientsOpinions/ClientsOpinions"

import "../styles/aboutPage.css"
import { CertificatesList } from "../components/CertificatesList/CertificatesList"
import { routes } from "../routes"
import { ContactForm } from "../components/ContactForm/ContactForm"

export const query = graphql`
  {
    datoCmsAboutPage {
      contentAbout {
        ... on DatoCmsContentSubHeader {
          contentSubHeader
        }
        ... on DatoCmsContentSubText {
          contentSubText
        }
        ... on DatoCmsContentCenterParagraph {
          contentCenterParagraph
        }
        ... on DatoCmsContentImage {
          contentImage {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
            alt
          }
        }
      }
    }
    datoCmsMetaDataPage(namePage: { eq: "oferta" }) {
      namePage
      title
      description
    }
  }
`

const AboutPage = ({
  data: { datoCmsAboutPage: contentAbout, datoCmsMetaDataPage },
}) => {
  const content = contentAbout.contentAbout.map((item, index) => {
    //do przebudowy - datocms jako pierwszy wcsika nam niepotrzebny element. Teraz jest podatne na zmianę kolejności wpisywanych parametrów w query
    if (Object.keys(item).length === 1) return null
    const itemKey = Object.keys(item)[1]
    switch (itemKey) {
      case "contentSubText":
        return (
          <ReactMarkdown
            className="about-page-content"
            key={index}
            children={item[itemKey]}
          />
        )
      case "contentSubHeader":
        return (
          <h2
            className="text-center py-7"
            key={index}
            style={{ fontFamily: "Montserrat" }}
          >
            {item[itemKey]}
          </h2>
        )
      case "contentImage":
        return (
          <Image
            style={{
              maxWidth: "54rem",
              width: "100%",
              margin: "1rem auto",
            }}
            alt={item[itemKey].alt}
            key={index}
            fluid={item[itemKey].fluid}
          />
        )
      case "contentCenterParagraph":
        return (
          <span key={index} className="block text-center">
            {item[itemKey]}
          </span>
        )
      default:
        return null
    }
  })

  const { title, description } = datoCmsMetaDataPage

  return (
    <Layout>
      <SEO title={title || "About"} description={description || "nowy opis"} />
      <SiteTitle>Kilka słów o nas</SiteTitle>
      <div className="flex flex-col sm:flex-row">
        <div className="mx-auto bg-primary">
          <div className="bg-white pb-9">
            <div className="px-5 text-justify">
              <div>{content}</div>
              <p>
                {" "}
                Zapraszamy do zapoznania się z{" "}
                <Link to={routes.offer} className="text-primary">
                  ofertą
                </Link>{" "}
                i
                <Link to={routes.contact} className="text-primary">
                  {" "}
                  kontaktu.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <CertificatesList />
    </Layout>
  )
}

export default AboutPage
