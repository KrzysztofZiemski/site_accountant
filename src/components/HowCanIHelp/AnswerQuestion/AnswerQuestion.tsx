import React from "react"
import { ButtonWhite } from "../../Button/ButtonWhite"
import { steps } from "../HowCanIHelp"
import { HeaderComponent } from "../../HeaderComponent/HeaderComponent"

interface AnswerQuestionProps {
  setStep: (value: steps) => void
}

const AnswerQuestion = ({ setStep }) => {
  return (
    <div className="w-full h-full overflow-y-auto text-white flex flex-col p-4 ">
      <HeaderComponent
        className="w-full"
        title="WSPÓŁPRACA"
        subTitle="Sprawdź jak możemy Ci pomóc"
      />
      <div className="flex h-full p-4 flex-col  text-xl font-bold overflow-hidden ">
        <div className=" w-full my-3 md:w-7/12 lg:w-5/12 md:mx-auto md:my-2">
          <ButtonWhite
            onClick={() => {
              setStep(steps.wantOpenCompany)
            }}
          >
            <strong>Chcesz założyć działalność?</strong>
          </ButtonWhite>
        </div>
        <div className="w-full my-3 md:w-7/12 md:mx-auto md:my-2 lg:w-5/12">
          <ButtonWhite
            onClick={() => {
              setStep(steps.wantChangeAccountant)
            }}
          >
            <strong> Chcesz przenieść księgowość?</strong>
          </ButtonWhite>
        </div>
      </div>
    </div>
  )
}

export default AnswerQuestion
