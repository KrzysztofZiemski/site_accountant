import { Link } from "gatsby"
import React from "react"
import { routes } from "../../../routes"
import { ButtonBack } from "../../Button/ButtonBack"
import { ButtonLink } from "../../Button/ButtonLink"
import { IconsContact } from "../../IconsContact/IconsContact"
import { steps } from "../HowCanIHelp"

import "./WantOpenCompany.css"

interface WantOpenCompanyProps {
  setStep: (value: steps) => void
}
export const WantOpenCompany = ({ setStep }: WantOpenCompanyProps) => {
  return (
    <div className="flex flex-col p-4 pt-0 w-full h-full justify-between overflow-y-auto">
      <div className="flex-grow">
        <h2 className="text-white text-xl sm:text-2xl p-4  text-center mb-5 md:text-2xl">
          Otworzenie działalności
        </h2>
        <ul className="want-open-company-list text-white">
          <li>
            Przygotuj niezbędne informacje - PKD wiodące i dodatkowe, krótki
            biznes plan (wysokość planowanych przychodów, wydatków miesięcznych,
            itp.), orientacyjny czas otwarcia firmy, NIP (jeżeli posiadasz).
          </li>
          <li>
            Zgłoś się do nas. Porozmawiamy o dogodnej formie opodatkowania i
            podpowiemy, jak dokonać formalności związanych z założeniem firmy.
          </li>
          <li>Zarejestruj firmę.</li>
          <li>Podpisz z nami umowę na obsługę księgową.</li>
          <li>
            Złóż w urzędzie skarbowym i ZUS pełnomocnictwa, które od nas
            otrzymasz.
          </li>
          <li className="flex items-center">
            <span className="mr-1">
              Działaj! A jeśli masz wątpliwości, skonsultuj się z nami
            </span>
            <IconsContact />
          </li>
        </ul>
      </div>
      <ButtonBack
        className="self-end"
        onClick={() => setStep(steps.askQuestion)}
      >
        powrót
      </ButtonBack>
    </div>
  )
}
