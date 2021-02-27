import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "dzialalnosc_charytatywna" }) {
      namePage
      title
      description
    }
  }
`
const charity = ({ data: datoCmsMetaDataPage }) => {
  const { title, description } = datoCmsMetaDataPage

  return (
    <Layout includeHeader={false}>
      <SEO title={title || "Articles"} description={description || ""} />
      articles
    </Layout>
  )
}

export default charity
