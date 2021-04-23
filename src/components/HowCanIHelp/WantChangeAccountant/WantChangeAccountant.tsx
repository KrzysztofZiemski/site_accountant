import React from "react"
import { Link } from "gatsby"
import { ButtonBack } from "../../Button/ButtonBack"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
//@ts-ignore
import PhoneIcon from "../../../assets/phone-call.svg"
import "react-vertical-timeline-component/style.min.css"
import { steps } from "../HowCanIHelp"
import { routes } from "../../../routes"
import { TimeLineElement } from "../../TimeLineElement/TimeLineElement"
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
        <VerticalTimeline className="font-MonTserrat">
          <TimeLineElement>
            Przygotuj niezbędne informacje - NIP firmy, dotychczasowa forma
            opodatkowania, czas, w którym chcesz rozpocząć współpracę.
          </TimeLineElement>
          <TimeLineElement
            className="flex items-center"
            icon={<PhoneIcon className="w-full" />}
          >
            <span className="mr-1">
              Skontaktuj się z nami - opowiemy Ci, jak wygląda współpraca.
            </span>

            <IconsContact />
          </TimeLineElement>
          <TimeLineElement>
            Przekaż nam niezbędne dokumenty, których listę od nas otrzymasz.
          </TimeLineElement>
          <TimeLineElement>
            Jeżeli zgłosiłeś w CEiDG miejsce przechowywania dokumentacji
            księgowej, dokonaj stosownej zmiany.
          </TimeLineElement>
          <TimeLineElement>
            Złóż w urzędzie skarbowym i ZUS pełnomocnictwa, które od nas
            otrzymasz.
          </TimeLineElement>
        </VerticalTimeline>{" "}
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
