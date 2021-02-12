import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

//@ts-ignore
import PointerIcon from "../../assets/location-pointer.svg"
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
    <footer className="bg-secondary flex flex-col md:flex-row justify-center md:justify-between text-white text-xs">
      <address className="p-2 pt-2 md:flex-grow md:text-base md:flex md:justify-around items-center md:order-2">
        <div className="mb-4">
          <p className="leading-9">GODZINY OTWARCIA</p>
          <p className="leading-9">PN - PT: 8 - 19</p>
        </div>
        <div>
          <div className="flex">
            <PointerIcon className="w-5 h-5 mr-4" />
            <div>
              <p className="uppercase mb-3">
                <strong>Nasze biuro</strong>
              </p>
              <p>ul. Łukasińskiego 12-14/4</p>
              <p> 50-436 Wrocław</p>
              <p className="mt-3">604065485</p>
              <p>magifi@gmail.com</p>
              <div className="flex md:block mb-2 mt-5">
                <p className="mr-1"> NIP 9151737051</p>
                <p> Regon 380206135</p>
              </div>
            </div>
          </div>
        </div>
      </address>
      <div className="w-full md:w-1/3 md:order-1 md:min-w-475px">
        <Image
          className="footer-image h-full"
          fluid={file.childImageSharp.fluid}
        />
      </div>
    </footer>
  )
}
