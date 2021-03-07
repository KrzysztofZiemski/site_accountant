import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ClientPost } from "../ClientPost/ClientPost"
import { SimpleSlider } from "../SimpleSlider/SimpleSlider"
import { SubTitle } from "../SubTitle/SubTitle"

import "./ClientsOpinions.css"

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
interface ClientsOpinionsProps {
  className: string
}

export const ClientsOpinions = ({ className }: ClientsOpinionsProps) => {
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
    <div className={`py-9 md:py-28 clients-opinion-container ${className}`}>
      <div className="relative z-10">
        <div className="text-white mb-7 ml-3 flex items-center clients-opinion-container__recomends">
          <span className="ml-9">REKOMENDACJE</span>
        </div>
        <SubTitle className="mb-9 ml-3 text-white">
          Co piszą o nas nasi klienci
        </SubTitle>
        <SimpleSlider>{opinionsClients}</SimpleSlider>
      </div>
    </div>
  )
}

ClientsOpinions.defaultProps = {
  className: "",
}
