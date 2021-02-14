import React from "react"
import Image from "gatsby-image"
import { Animate, typeAnimation } from "../Animate/Animate"
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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around items-center py-16 overflow-hidden">
        <Animate type={typeAnimation.slideLeft}>
          <h1 className="overflow tracking-wide font-bold mb-6 md:mb-9 text-white text-center w-full text-3xl sm:text-5xl md:text6x1 lg:text-6xl transition-all duration-500">
            Usługi księgowe
          </h1>
        </Animate>

        <Animate type={typeAnimation.slideRight}>
          <h2 className="tracking-wide font-bold mb-6 md:mb-9 text-white text-center w-full text-2xl sm:text-4xl md:text6x1 lg:text-5xl">
            Księgowa przez Internet
          </h2>
        </Animate>

        <div className="">
          <Animate type={typeAnimation.slideUp}>
            <Button>SPRAWDŹ OFERTĘ</Button>
          </Animate>
        </div>
      </div>
    </header>
  )
}
