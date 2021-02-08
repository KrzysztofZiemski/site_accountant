import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  {
    file(name: { regex: "/header/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

type BurgerProps = {
  siteTitle: string
}

export const Header = ({ siteTitle }: BurgerProps) => {
  const { file } = useStaticQuery(query)

  return (
    <header className="text-lg relative ">
      <Image
        alt="księgowość online"
        className="object-cover w-full m-auto"
        fluid={file.childImageSharp.fluid}
        imgStyle={{ maxHeight: "30rem" }}
      />
      <h1 className="absolute top-1/4 tracking-wide font-bold transform  text-white text-center w-full text-3xl">
        Usługi księgowe online
      </h1>
    </header>
  )
}
