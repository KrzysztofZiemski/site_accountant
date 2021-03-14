import React from "react"
import { steps } from "../HowCanIHelp"
import "./AnswerQuestion.css"

interface AnswerQuestionProps {
  setStep: (value: steps) => void
}

const AnswerQuestion = ({ setStep }) => {
  return (
    <div className="p-4 w-full h-full overflow-y-auto">
      <p className="text-white text-xl sm:text-2xl p-4 sm:mt-5 text-center mb-5 md:text-3xl md:mb-7 ">
        Sprawdź jak możemy Ci pomóc
      </p>
      <div className="flex flex-col justify-around items-center h-44 text-xs font-bold whitespace-nowrap overflow-hidden sm:text-base md:text-lg md:h-56">
        <button
          onClick={() => {
            setStep(steps.wantOpenCompany)
          }}
          className="border-none pointer transition text-yellow-400 focus:outline-none hover:text-yellow-100"
        >
          <strong>Chcesz założyć działalność?</strong>
        </button>

        <button
          onClick={() => {
            setStep(steps.wantChangeAccountant)
          }}
          className="border-none pointer transition yellow-200 text-yellow-400 focus:outline-none hover:text-yellow-100"
        >
          <strong> Chcesz przenieść księgowość?</strong>
        </button>
      </div>
    </div>
  )
}

export default AnswerQuestion
