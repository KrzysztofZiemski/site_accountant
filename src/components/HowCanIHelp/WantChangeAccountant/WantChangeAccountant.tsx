import React from "react"
import { Link } from "gatsby"
import { ButtonBack } from "../../Button/ButtonBack"
import { steps } from "../HowCanIHelp"
import { routes } from "../../../routes"

import "./WantChangeAccountant.css"
import { Button } from "../../Button/Button"
import { ButtonLink } from "../../Button/ButtonLink"
import { IconsContact } from "../../IconsContact/IconsContact"

interface WantChangeAccountantProps {
  setStep: (value: steps) => void
}

export const WantChangeAccountant = ({
  setStep,
}: WantChangeAccountantProps) => {
  return (
    <div className="flex flex-col p-4 w-full h-full justify-between overflow-y-auto">
      <div className="flex-grow mb-3">
        <h2 className="text-white text-2xl p-4 text-center mb-5 md:text-2xl">
          Chcę zmienić biuro rachunkowe
        </h2>
        <ul className="want-change-accountant-list text-white">
          <li>
            Przygotuj niezbędne informacje - NIP firmy, dotychczasowa forma
            opodatkowania, czas, w którym chcesz rozpocząć współpracę.
          </li>
          <li className="flex items-center">
            <span className="mr-1">
              {" "}
              Skontaktuj się z nami - opowiemy Ci, jak wygląda współpraca.
            </span>

            <IconsContact />
          </li>
          <li>
            Przekaż nam niezbędne dokumenty, których listę od nas otrzymasz.
          </li>
          <li>
            Jeżeli zgłosiłeś w CEiDG miejsce przechowywania dokumentacji
            księgowej, dokonaj stosownej zmiany.
          </li>
          <li>
            Złóż w urzędzie skarbowym i ZUS pełnomocnictwa, które od nas
            otrzymasz.
          </li>
        </ul>{" "}
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
