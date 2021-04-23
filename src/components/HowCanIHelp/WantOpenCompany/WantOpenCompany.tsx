import { Link } from "gatsby"
import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { TimeLineElement } from "../../TimeLineElement/TimeLineElement"
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
    <div className="flex flex-col p-4 pt-0 w-full h-full justify-between overflow-y-auto ">
      <div className="flex-grow">
        <h2 className="text-white text-xl sm:text-2xl p-4  text-center mb-5 md:text-2xl">
          Otworzenie działalności
        </h2>
        <VerticalTimeline className="font-MonTserrat">
          <TimeLineElement>
            Przygotuj niezbędne informacje - PKD wiodące i dodatkowe, krótki
            biznes plan (wysokość planowanych przychodów, wydatków miesięcznych,
            itp.), orientacyjny czas otwarcia firmy, NIP (jeżeli posiadasz).
          </TimeLineElement>
          <TimeLineElement>
            Zgłoś się do nas. Porozmawiamy o dogodnej formie opodatkowania i
            podpowiemy, jak dokonać formalności związanych z założeniem firmy.
          </TimeLineElement>
          <TimeLineElement>Zarejestruj firmę.</TimeLineElement>
          <TimeLineElement>
            Podpisz z nami umowę na obsługę księgową.
          </TimeLineElement>
          <TimeLineElement>
            Złóż w urzędzie skarbowym i ZUS pełnomocnictwa, które od nas
            otrzymasz.
          </TimeLineElement>
          <TimeLineElement className="flex items-center">
            <span className="m-1">
              Działaj! A jeśli masz wątpliwości, skonsultuj się z nami
            </span>
            <IconsContact />
          </TimeLineElement>
        </VerticalTimeline>
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
