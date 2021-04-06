import React from "react"
//@ts-ignore
import IconAccountant from "../../assets/offer-icons/accounting.svg"
//@ts-ignore
import IconHr from "../../assets/offer-icons/hr.svg"
//@ts-ignore
import IconConsultant from "../../assets/offer-icons/consultant.svg"
import { Link } from "gatsby"
import { routes } from "../../routes"

export const OfferServices = () => {
  return (
    <div className="flex flex-col items-center p-2 flex-wrap text-primary sm:flex-row justify-center md:justify-around lg:justify-center">
      <Link to={routes.offer}>
        <div className="flex justify-start items-center hover:cursor-pointer	 text-bold p-4 mb-2 sm:flex-col lg:m-10">
          <IconAccountant
            alt="księgowość"
            className="w-auto h-20 md:mb-5"
          ></IconAccountant>

          <p className="ml-4 text-2xl">
            <strong>Księgowość</strong>
          </p>
        </div>
      </Link>
      <Link to={routes.offer}>
        <div className="flex justify-start items-center text-bold p-4 mb-2 sm:flex-col lg:m-10">
          <IconHr alt="kadry i płace" className="w-auto h-20 md:mb-5"></IconHr>

          <p className="ml-4 text-2xl">
            <strong>Kadry i płace</strong>
          </p>
        </div>
      </Link>
      <Link to={routes.offer}>
        <div className="flex justify-start items-center hover:cursor-pointer	 text-bold p-4 mb-2 sm:flex-col lg:m-10">
          <IconConsultant
            alt="konsultacje"
            className="w-auto h-20 md:mb-5"
          ></IconConsultant>

          <p className="ml-4 text-2xl">
            <strong>Konsultacje</strong>
          </p>
        </div>
      </Link>
    </div>
  )
}
