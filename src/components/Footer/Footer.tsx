import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
//@ts-ignore
import PointerIcon from "../../assets/location-pointer.svg"
//@ts-ignore
import PhoneIcon from "../../assets/phone-call.svg"
//@ts-ignore
import MessageIcon from "../../assets/message.svg"
//@ts-ignore
import FacebookIcon from "../../assets/facebook.svg"

import "./Footer.css"
import { routes } from "../../routes"
import { isMobileOnly } from "react-device-detect"

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

export const Footer = () => {
  const { file } = useStaticQuery(query)
  const handleGoCall = () => {
    isMobileOnly && window.open("tel:729976922")
  }

  return (
    <footer className="bg-secondary flex flex-col z-10 py-3 md:flex-row text-white md:justify-between md:flex-wrap">
      <div className="flex items-start w-1/3 p-6 md:order-1 md:w-40 lg:w-60 lg:items-center">
        <Image
          className="footer-image w-full"
          fluid={file.childImageSharp.fluid}
          alt="MagFi Magdalena Pol"
        />
      </div>

      <address className="p-2 pt-2 not-italic	 sm:w-2/5 md:flex-grow md:text-base md:flex md:justify-around items-center md:order-2 lg:order-2">
        <div className="flex flex-col mb-9 md:mb-0">
          <p className="leading-9 w-full">
            {" "}
            <strong>GODZINY OTWARCIA</strong>
          </p>
          <div className="w-60 ">
            <p className="flex justify-between leading-9">
              <span>Poniedziałek</span> <span>8.00 - 19.00</span>
            </p>
            <p className="flex justify-between leading-9">
              <span>Wtorek</span> <span>8.00 - 19.00</span>
            </p>
            <p className="flex justify-between leading-9">
              <span>Środa</span> <span>8.00 - 19.00</span>
            </p>
            <p className="flex justify-between leading-9">
              <span>Czwartek</span> <span>8.00 - 19.00</span>
            </p>
            <p className="flex justify-between leading-9">
              <span>Piątek</span> <span>8.00 - 19.00</span>
            </p>
            <p className="flex justify-between leading-9">
              <span>Sobota</span> <span>10.00 - 15.00</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <div>
              <div className="flex mb-6">
                <PointerIcon alt="nasze biuro" className="w-5 h-5 mr-4" />
                <div>
                  <p className="uppercase mb-3">
                    <strong>
                      {" "}
                      <Link to={`${routes.contact}#company-base`}>
                        Nasze biuro{" "}
                      </Link>
                    </strong>
                  </p>
                  <p>ul. Łukasińskiego 12-14/4</p>
                  <p> 50-436 Wrocław</p>
                </div>
              </div>

              <div className="flex items-center mt-3">
                <PhoneIcon
                  alt="telefon"
                  className="w-5 h-5 mr-4"
                  style={{ fill: "white" }}
                />
                <p onClick={handleGoCall}>729976922</p>
              </div>
              <div className="flex items-center mt-3">
                <MessageIcon
                  alt="e-mail"
                  className="w-5 h-5 mr-4"
                  style={{ fill: "white" }}
                />
                <p>kontakt.magfi@gmail.com</p>
              </div>
              <div className="flex items-center mt-3">
                <FacebookIcon
                  className="w-5 h-5 mr-4"
                  style={{ fill: "white" }}
                  alt="facebook"
                />
                <p>
                  <a href="https://www.facebook.com/magfipol">
                    facebook.com/magfipol
                  </a>
                </p>
              </div>

              <div className="flex flex-col md:block mb-2 mt-5 ml-9">
                <p className="mr-1"> NIP 9151737051</p>
                <p> Regon 380206135</p>
              </div>
              <div className="mt-5 ml-9 sm:mt-7 ">
                <Link to={routes.policy}>Polityka prywatności</Link>
              </div>
            </div>
          </div>
        </div>
      </address>
    </footer>
  )
}
