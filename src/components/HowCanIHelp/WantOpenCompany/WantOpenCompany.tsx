import { Link } from "gatsby"
import React from "react"
import { routes } from "../../../routes"
import { ButtonBack } from "../../Button/ButtonBack"
import { ButtonLink } from "../../Button/ButtonLink"
import { steps } from "../HowCanIHelp"

import "./WantOpenCompany.css"

interface WantOpenCompanyProps {
  setStep: (value: steps) => void
}
export const WantOpenCompany = ({ setStep }: WantOpenCompanyProps) => {
  return (
    <div className="flex flex-col p-4 w-full h-full justify-between overflow-y-auto">
      <div className="flex-grow">
        <h2 className="text-white text-xl sm:text-2xl p-4 sm:mt-5 text-center mb-5 md:text-3xl md:mb-7">
          Otworzenie działalności
        </h2>
        <ul className="want-open-company-list text-white">
          <li>Zastanów się nad formą opodatkowania działalności</li>
          <li>Sprawdź jakie PKD powinna mieć działalność</li>
          <li>Załóż NIP</li>
          <li>Załóż REGON</li>
          <li>Załóż działalność gospodarczą</li>
          <li>Znajdź biuro księgowe</li>
        </ul>
        <div className="text-center">
          {" "}
          <ButtonLink to={routes.contact}>Chętnie pomogę</ButtonLink>
        </div>
      </div>
      <ButtonBack
        className="self-start"
        onClick={() => setStep(steps.askQuestion)}
      >
        powrót
      </ButtonBack>
    </div>
  )
}
