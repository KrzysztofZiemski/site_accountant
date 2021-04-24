import React from "react"
import { Link } from "gatsby"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { steps } from "../HowCanIHelp"
import { TimeLineElement } from "../../TimeLineElement/TimeLineElement"
import { IconsContact } from "../../IconsContact/IconsContact"
import { call } from "../../../helpers/call"

//@ts-ignore
import PhoneIcon from "../../../assets/phone-call.svg"
//@ts-ignore
import PaperIcon from "../../../assets/paper.svg"
//@ts-ignore
import ComputerIcon from "../../../assets/computer.svg"
//@ts-ignore
import WritingIcon from "../../../assets/writing.svg"
//@ts-ignore
import FileIcon from "../../../assets/file.svg"

const colorIcon = "white"

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
          <TimeLineElement
            icon={
              <FileIcon
                className="w-full cursor-pointer"
                style={{ fill: colorIcon }}
                onClick={call}
              />
            }
          >
            Przygotuj niezbędne informacje - NIP firmy, dotychczasowa forma
            opodatkowania, czas, w którym chcesz rozpocząć współpracę.
          </TimeLineElement>
          <TimeLineElement
            className="flex flex-col items-center sm:flex-row sm:justify-center"
            icon={
              <PhoneIcon
                className="w-full cursor-pointer"
                style={{ fill: "white" }}
                onClick={call}
              />
            }
          >
            <span className="mr-1">
              Skontaktuj się z nami - opowiemy Ci, jak wygląda współpraca.
            </span>

            <IconsContact className="justify-center mt-3 sm:mt-0" />
          </TimeLineElement>
          <TimeLineElement
            icon={
              <WritingIcon
                className="w-full cursor-pointer"
                style={{ fill: colorIcon }}
                onClick={call}
              />
            }
          >
            Przekaż nam niezbędne dokumenty, których listę od nas otrzymasz.
          </TimeLineElement>
          <TimeLineElement
            icon={
              <ComputerIcon
                className="w-full cursor-pointer"
                style={{ fill: colorIcon }}
                onClick={call}
              />
            }
          >
            Jeżeli zgłosiłeś w CEiDG miejsce przechowywania dokumentacji
            księgowej, dokonaj stosownej zmiany.
          </TimeLineElement>
          <TimeLineElement
            icon={
              <PaperIcon
                className="w-full cursor-pointer"
                style={{ fill: colorIcon }}
                onClick={call}
              />
            }
          >
            Złóż w urzędzie skarbowym i ZUS pełnomocnictwa, które od nas
            otrzymasz.
          </TimeLineElement>
        </VerticalTimeline>{" "}
      </div>
    </div>
  )
}
