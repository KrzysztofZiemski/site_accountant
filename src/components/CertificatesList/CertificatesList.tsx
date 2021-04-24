import React, { useMemo, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//@ts-ignore
import CloseIconSVG from "../../assets/cancel.svg"

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
  const [indexShow, setIndexShow] = useState(null)

  const renderCertyficate = useMemo(() => {
    return certyficateImageList.map(({ image, id }, index) => {
      return (
        <button
          className="w-2/3 m-5 sm:m-6 sm:w-60"
          key={id}
          onClick={() => setIndexShow(index)}
        >
          <Image style={{ minWidth: "100%" }} fluid={image.fluid}></Image>
        </button>
      )
    })
  }, [])
  return (
    <div className="">
      {indexShow !== null && (
        <div
          className="fixed top-0 left-0 w-screen	h-screen flex items-center justify-center z-50 p-10"
          style={{ backgroundColor: "rgba(0,0,0,.8)" }}
        >
          <button
            onClick={() => setIndexShow(null)}
            className="absolute right-10 top-5 z-10"
          >
            <CloseIconSVG className="w-5 h-5" style={{ fill: "white" }} />
          </button>
          <Image
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              width: "90%",
            }}
            imgStyle={{ objectFit: "contain" }}
            fluid={certyficateImageList[indexShow].image.fluid}
          />
        </div>
      )}
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
