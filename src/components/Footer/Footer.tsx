import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

//@ts-ignore
import PointerIcon from "../../assets/location-pointer.svg"
import "./Footer.css"
import { Link } from "gatsby"
import { routes } from "../../routes"

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
    <footer className="bg-secondary flex flex-col sm:flex-row sm:flex-wrap text-white md:flex-row md:justify-between  md:flex-wrap lg:flex-nowrap">
      <ul className="my-3 mx-auto sm:w-2/5 text-center text-md md:text-left md:w-auto md:ml-9 lg:order-2">
        <li className="m-2">
          <Link to={routes.main}>strona główna</Link>
        </li>
        <li className="m-2">
          <Link to={routes.about}>o nas</Link>
        </li>

        <li className="m-2">
          <Link to={routes.offer}>oferta</Link>
        </li>
        <li className="m-2">
          <Link to={routes.articles}> aktualności</Link>
        </li>
        <li className="m-2">
          <Link to={routes.charity}>działalność charytatywna</Link>
        </li>
        <li className="m-2">
          <Link to={routes.contact}>kontakt</Link>
        </li>
      </ul>
      <address className="p-2 pt-2 sm:w-2/5 md:flex-grow md:text-base md:flex md:justify-around items-center md:order-2 lg:order-3">
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

      <div className="w-full md:order-3 md:flex md:justify-center lg:order-1 lg:w-2/5">
        <Image
          className="footer-image h-full w-full"
          fluid={file.childImageSharp.fluid}
        />
      </div>
    </footer>
  )
}
