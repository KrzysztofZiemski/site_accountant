import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ClientPost } from "../ClientPost/ClientPost"

const query = graphql`
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

export const Clients = () => {
  const { allDatoCmsClient: nodes } = useStaticQuery(query)
  const clients: Array<ClientType> = nodes.nodes

  const opinions = clients.map(({ name, clientOpinion, score }) => (
    <ClientPost
      key={name}
      name={name}
      score={score}
      description={clientOpinion}
    />
  ))
  return (
    <ul className="flex flex-col flex-wrap px-2 md:flex-row md:justify-center mx-auto">
      {opinions}
    </ul>
  )
}
