import { Link } from "gatsby"
import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { TimeLineElement } from "../../TimeLineElement/TimeLineElement"
import { routes } from "../../../routes"
import { ButtonLink } from "../../Button/ButtonLink"
import { IconsContact } from "../../IconsContact/IconsContact"
import { steps } from "../HowCanIHelp"
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

import { call } from "../../../helpers/call"

const colorIcon = "white"
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
          <TimeLineElement icon={<FileIcon style={{ fill: colorIcon }} />}>
            Przygotuj niezbędne informacje - PKD wiodące i dodatkowe, krótki
            biznes plan (wysokość planowanych przychodów, wydatków miesięcznych,
            itp.), orientacyjny czas otwarcia firmy, NIP (jeżeli posiadasz).
          </TimeLineElement>
          <TimeLineElement
            icon={
              <PhoneIcon
                className="w-full cursor-pointer"
                style={{ fill: colorIcon }}
                onClick={call}
              />
            }
          >
            Zgłoś się do nas. Porozmawiamy o dogodnej formie opodatkowania i
            podpowiemy, jak dokonać formalności związanych z założeniem firmy.
          </TimeLineElement>
          <TimeLineElement icon={<ComputerIcon style={{ fill: colorIcon }} />}>
            Zarejestruj firmę.
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
            Podpisz z nami umowę na obsługę księgową.
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
          <TimeLineElement
            className="flex flex-col items-center sm:flex-row sm:justify-center"
            icon={
              <PhoneIcon
                className="w-full cursor-pointer"
                style={{ fill: colorIcon }}
                onClick={call}
              />
            }
          >
            <span className="m-1">
              Działaj! A jeśli masz wątpliwości, skonsultuj się z nami
            </span>
            <IconsContact className="justify-center mt-3 sm:mt-0" />
          </TimeLineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
