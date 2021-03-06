import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ClientPost } from "../ClientPost/ClientPost"
import { SimpleSlider } from "../SimpleSlider/SimpleSlider"

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

export const ClientsOpinions = () => {
  const { allDatoCmsClient: nodes } = useStaticQuery(query)
  const clients: Array<ClientType> = nodes.nodes

  const opinionsClients = clients.map(({ name, clientOpinion, score }) => (
    <ClientPost
      key={name}
      name={name}
      score={score}
      description={clientOpinion}
    />
  ))
  return (
    <div className="pb-7 border-8 text-secondary">
      <h2 className="text-center uppercase font-bold text-secondary p-3 text-md border-b-8">
        Zobacz co mówią nasi kliencji
      </h2>
      <SimpleSlider className="w-10/12 md:w-11/12 m-auto text-white">
        {opinionsClients}
      </SimpleSlider>
    </div>
  )
}
