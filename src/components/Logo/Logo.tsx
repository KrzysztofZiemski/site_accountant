import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    file(name: { regex: "/logo/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Logo = () => {
  const { file } = useStaticQuery(query)

  return <Image className="h-auto w-20 " fluid={file.childImageSharp.fluid} />
}

export default Logo
