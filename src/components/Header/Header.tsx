import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Button } from "../Button/Button"

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
    <header
      className="text-lg relative h-auto "
      style={{ maxHeight: "30rem", overflow: "hidden" }}
    >
      <Image
        alt="księgowość online"
        className="object-cover w-full m-auto"
        fluid={file.childImageSharp.fluid}
        imgStyle={{ maxHeight: "30rem" }}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around items-center py-16">
        <h1 className="tracking-wide font-bold mb-6 md:mb-9 text-white text-center w-full text-3xl sm:text-5xl md:text6x1 lg:text-6xl">
          Usługi księgowe online
        </h1>
        <div className="">
          <Button>SPRAWDŹ OFERTĘ</Button>
        </div>
      </div>
    </header>
  )
}
