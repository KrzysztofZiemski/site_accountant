import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    file(name: { regex: "/logo-blue/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const LogoBlue = () => {
  const { file } = useStaticQuery(query)

  return <Image className="h-auto w-28" fluid={file.childImageSharp.fluid} />
}

export default LogoBlue
