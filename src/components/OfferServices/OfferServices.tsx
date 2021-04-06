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
      <div className="flex justify-start items-center text-bold p-4 mb-2 sm:flex-col lg:m-10">
        <Link to={routes.offer}>
          <IconAccountant
            alt="księgowość"
            className="w-auto h-20 md:mb-5"
          ></IconAccountant>
        </Link>
        <p className="ml-4 text-2xl">
          <strong>Księgowość</strong>
        </p>
      </div>
      <div className="flex justify-start items-center text-bold p-4 mb-2 sm:flex-col lg:m-10">
        <Link to={routes.offer}>
          <IconHr alt="kadry i płace" className="w-auto h-20 md:mb-5"></IconHr>
        </Link>
        <p className="ml-4 text-2xl">
          <strong>Kadry i płace</strong>
        </p>
      </div>
      <div className="flex justify-start items-center text-bold p-4 mb-2 sm:flex-col lg:m-10">
        <Link to={routes.offer}>
          <IconConsultant
            alt="konsultacje"
            className="w-auto h-20 md:mb-5"
          ></IconConsultant>
        </Link>
        <p className="ml-4 text-2xl">
          <strong>Konsultacje</strong>
        </p>
      </div>
    </div>
  )
}
