import React from "react"
import { ButtonBack } from "../../Button/ButtonBack"
import { steps } from "../HowCanIHelp"

interface WantChangeAccountantProps {
  setStep: (value: steps) => void
}

export const WantChangeAccountant = ({
  setStep,
}: WantChangeAccountantProps) => {
  return (
    <div className="flex flex-col p-4 w-full min-h-full justify-between">
      <div className="flex-grow">
        {" "}
        <h2>zapraszam do zmiany księgowej </h2>
        <div>Co będziesz potrzebować</div>
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
