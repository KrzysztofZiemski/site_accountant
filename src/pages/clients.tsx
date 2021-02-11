import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { ClientPost } from "../components/ClientPost/ClientPost"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"

export const query = graphql`
  {
    allDatoCmsClient(sort: { fields: [meta___createdAt], order: DESC }) {
      nodes {
        name
        score
        clientOpinion
      }
    }
  }
`
type ClientType = {
  name: string
  clientOpinion: string
  score: number
}

const ClientsPage = ({ data: { allDatoCmsClient: nodes } }) => {
  const clients: Array<ClientType> = nodes.nodes
  console.log("clients", clients)
  const opinions = clients.map(({ name, clientOpinion, score }) => (
    <ClientPost
      key={name}
      name={name}
      score={score}
      description={clientOpinion}
    />
  ))

  return (
    <Layout includeHeader={false}>
      <SEO title="Clients" />
      <SiteTitle>NASI KLIENCI</SiteTitle>
      <ul
        className="flex flex-col flex-wrap px-2 md:flex-row md:justify-center mx-auto"
        style={{ maxWidth: "1280px" }}
      >
        {opinions}
      </ul>
    </Layout>
  )
}

export default ClientsPage
