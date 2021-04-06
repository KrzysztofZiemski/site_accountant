import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    file(name: { regex: "/logo-white/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const LogoWhite = () => {
  const { file } = useStaticQuery(query)

  return (
    <Image
      alt="MagFi Magdalena Pol"
      className="h-auto w-28"
      fluid={file.childImageSharp.fluid}
    />
  )
}

export default LogoWhite
