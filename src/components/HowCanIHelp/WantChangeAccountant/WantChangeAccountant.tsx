import React from "react"
import { Link } from "gatsby"
import { ButtonBack } from "../../Button/ButtonBack"
import { steps } from "../HowCanIHelp"
import { routes } from "../../../routes"

import "./WantChangeAccountant.css"
import { Button } from "../../Button/Button"
import { ButtonLink } from "../../Button/ButtonLink"

interface WantChangeAccountantProps {
  setStep: (value: steps) => void
}

export const WantChangeAccountant = ({
  setStep,
}: WantChangeAccountantProps) => {
  return (
    <div className="flex flex-col p-4 w-full h-full justify-between overflow-y-auto">
      <div className="flex-grow mb-3">
        <h2 className="text-white text-xl sm:text-2xl p-4 sm:mt-5 text-center mb-5 md:text-3xl md:mb-7">
          Zmiana księgowości
        </h2>
        <ul className="want-change-accountant-list text-white">
          <li>Sprawdź okres wypowiedzenia w aktualnym biurze księgowym</li>
          <li className="text-secondary underline">
            <Link to={routes.offer}> Skorzystaj z 2 miesięcy za darmo</Link>
          </li>
          <li>
            Poproś o wysłanie wszystkich dokumentów z aktualnego biura
            księgowego
          </li>
          <li className="text-secondary underline">
            <Link to={routes.contact}>Skontaktu się ze mną</Link>
          </li>
        </ul>{" "}
        <div className="text-center">
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
