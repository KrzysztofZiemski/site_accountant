import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ClientPost } from "../ClientPost/ClientPost"
import { SimpleSlider } from "../SimpleSlider/SimpleSlider"

import "./ClientsOpinions.css"
import { SubTitle } from "../HeaderComponent/SubTitle/SubTitle"
import { HeaderComponent } from "../HeaderComponent/HeaderComponent"

const query = graphql`
  {
    allDatoCmsClient(sort: { fields: [meta___createdAt], order: DESC }) {
      nodes {
        name
        score
        clientOpinion
        company
        linkPage
      }
    }
  }
`
interface ClientType {
  name: string
  clientOpinion: string
  score: number
  company: string
  linkPage?: string
}

interface ClientsOpinionsProps {
  className: string
}

export const ClientsOpinions = ({ className }: ClientsOpinionsProps) => {
  const { allDatoCmsClient: nodes } = useStaticQuery(query)
  const clients: Array<ClientType> = nodes.nodes

  const opinionsClients = clients.map(
    ({ name, clientOpinion, score, company, linkPage }) => (
      <ClientPost
        company={company}
        key={name}
        name={name}
        score={score}
        description={clientOpinion}
        link={linkPage}
      />
    )
  )

  return (
    <>
      {opinionsClients.length > 0 && (
        <>
          <div
            className={`py-9 md:py-28 clients-opinion-container ${className}`}
          >
            <div className="relative z-10">
              <HeaderComponent
                subTitle="Co piszą o nas klienci"
                title="REKOMENDACJE"
                className="text-white"
              />
              <SimpleSlider>{opinionsClients}</SimpleSlider>
            </div>
          </div>
        </>
      )}
    </>
  )
}

ClientsOpinions.defaultProps = {
  className: "",
}
