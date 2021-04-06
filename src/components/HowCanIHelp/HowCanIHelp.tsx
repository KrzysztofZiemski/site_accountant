import React, { useState, useCallback } from "react"
import { Animate } from "../Animate/Animate"
import { IsShowWrapper, showEnum } from "./IsShowWrapper"
import { Button } from "../Button/Button"
import { ButtonBack } from "../Button/ButtonBack"
import AnswerQuestion from "./AnswerQuestion/AnswerQuestion"
import { WantOpenCompany } from "./WantOpenCompany/WantOpenCompany"
import { WantChangeAccountant } from "./WantChangeAccountant/WantChangeAccountant"
import { isMobileOnly } from "react-device-detect"
export enum steps {
  askQuestion,
  wantOpenCompany,
  wantChangeAccountant,
}

export const HowCanIHelp = () => {
  const [step, setStep] = useState(steps.askQuestion)

  const isShowWantChangeAccountant = () => {
    if (step === steps.askQuestion) {
      return showEnum.next
    } else if (step === steps.wantChangeAccountant) {
      return showEnum.show
    } else {
      return showEnum.prev
    }
  }
  const changeStep = useCallback((value: steps) => {
    setStep(value)
  }, [])

  const isShowWantOpenCompany = () => {
    if (step === steps.askQuestion) {
      return showEnum.next
    } else if (step === steps.wantOpenCompany) {
      return showEnum.show
    } else {
      return showEnum.prev
    }
  }
  const showOption = () => {
    if (step === steps.askQuestion) {
      return showEnum.show
    } else if (
      step === steps.wantChangeAccountant ||
      step === steps.wantOpenCompany
    ) {
      return showEnum.prev
    }
  }
  const style = isMobileOnly
    ? { height: "35rem" }
    : {
        height: "29rem",
      }

  return (
    <div
      className="bg-primary w-full overflow-hidden transition relative transition"
      style={style}
    >
      <IsShowWrapper show={showOption()}>
        <AnswerQuestion setStep={changeStep} />
      </IsShowWrapper>
      <IsShowWrapper show={isShowWantOpenCompany()}>
        <WantOpenCompany setStep={changeStep} />
      </IsShowWrapper>
      <IsShowWrapper show={isShowWantChangeAccountant()}>
        <WantChangeAccountant setStep={changeStep} />
      </IsShowWrapper>
    </div>
  )
}

export default HowCanIHelp
