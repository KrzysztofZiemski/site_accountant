import React from "react"
import { ButtonBack } from "../../Button/ButtonBack"
import { steps } from "../HowCanIHelp"

interface WantOpenCompanyProps {
  setStep: (value: steps) => void
}
export const WantOpenCompany = ({ setStep }: WantOpenCompanyProps) => {
  return (
    <div className="flex flex-col p-4 w-full min-h-full justify-between">
      <div className="flex-grow"></div>
      <ButtonBack
        className="self-start"
        onClick={() => setStep(steps.askQuestion)}
      >
        powrót
      </ButtonBack>
    </div>
  )
}
