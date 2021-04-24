import React, { useState, useCallback, useRef } from "react"
import AnswerQuestion from "./AnswerQuestion/AnswerQuestion"
import { WantOpenCompany } from "./WantOpenCompany/WantOpenCompany"
import { WantChangeAccountant } from "./WantChangeAccountant/WantChangeAccountant"
import Slider from "react-slick"

import "./HowCanIHelp.css"

export enum steps {
  askQuestion = 0,
  wantOpenCompany = 1,
  wantChangeAccountant = 2,
}
const settings = {
  adaptiveHeight: true,
  accessibility: false,
  autoplay: false,
  draggable: false,
  infinite: false,
  initialSlide: steps.askQuestion,
}

export const HowCanIHelp = () => {
  const [step, setStep] = useState(steps.askQuestion)
  const sliderRef = useRef<Slider | undefined>()

  const changeStep = useCallback((value: steps) => {
    setStep(value)
    sliderRef.current?.slickGoTo(value)
  }, [])

  return (
    <div className="flex bg-primary width:100% overflow-hidden	">
      <Slider className="w-full " ref={sliderRef} {...settings}>
        <AnswerQuestion setStep={changeStep} />
        <>
          {step === steps.wantChangeAccountant && (
            <WantChangeAccountant setStep={changeStep} />
          )}
          {step === steps.wantOpenCompany && (
            <WantOpenCompany setStep={changeStep} />
          )}
        </>
      </Slider>
    </div>
  )
}

export default HowCanIHelp
