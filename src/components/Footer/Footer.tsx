import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import "./Footer.css"

export const query = graphql`
  {
    file(name: { regex: "/footer/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export const Footer = () => {
  const { file } = useStaticQuery(query)

  return (
    <footer className="bg-secondary flex flex-col md:flex-row justify-center md:justify-start text-white text-xs">
      <Image
        className="footer-image w-full md:w-64 md:mr-4"
        fluid={file.childImageSharp.fluid}
      />
      <address className="p-2 pt-0 md:flex-grow md:text-base md:flex md:justify-around items-center">
        <span className="block mb-2 md:mr-9">
          {" "}
          Magfi Magdalena Pol <br />
          ul. Łukasińskiego 12-14/4 <br />
          50-436 Wrocław <br />
        </span>
        <span>
          NIP 9151737051 <br />
          Regon 380206135
        </span>
      </address>
    </footer>
  )
}
