import React, { useMemo } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import "./CertificatesList.css"

export const query = graphql`
  {
    allDatoCmsCertificate {
      nodes {
        id
        image {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          url
        }
      }
    }
  }
`

export const CertificatesList = () => {
  const { allDatoCmsCertificate } = useStaticQuery(query)
  const certyficateImageList = allDatoCmsCertificate.nodes

  const renderCertyficate = useMemo(() => {
    return certyficateImageList.map(({ image, id }) => {
      return (
        <Link to={image.url} className="w-2/3 m-5 sm:m-6 sm:w-72" key={id}>
          <Image style={{ minWidth: "100%" }} fluid={image.fluid}></Image>
        </Link>
      )
    })
  }, [])
  return (
    <div className="">
      <div className="relative overflow-hidden p-12">
        {" "}
        <h2 className="text-2xl  font-bold text-center relative z-10 sm:text-4xl md:text-5xl">
          Certyfikaty
        </h2>
        <span className="absolute top-0 left-0 block w-full h-full bg-primary certyficate-header__spanDecorator"></span>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap px-3 items-center justify-center">
        {" "}
        {renderCertyficate}
      </div>
    </div>
  )
}
