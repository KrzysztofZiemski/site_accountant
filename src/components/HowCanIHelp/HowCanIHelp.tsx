import React, { useState } from "react"
import { Animate } from "../Animate/Animate"

import "./HowCanIHelp.css"

enum steps {
  askQuestion,
  wantOpenCompany,
  wantChangeAccountant,
}

const HowCanIHelp = () => {
  const [step, setStep] = useState(steps.askQuestion)
  return (
    <div className="bg-primary p-6">
      <p className="text-white text-2xl text-center mb-5">
        Sprawdź jak możemy Ci pomóc
      </p>
      <div className="flex flex-col justify-around items-center h-44 text-xl font-bold whitespace-nowrap overflow-hidden md:h-56">
        <button className="border-none pointer transition text-yellow-400 focus:outline-none hover:text-yellow-100">
          <strong>Chcesz założyć działalność?</strong>
        </button>

        <button className="border-none pointer transition yellow-200 text-yellow-400 focus:outline-none hover:text-yellow-100">
          <strong> Chcesz przenieść księgowość?</strong>
        </button>
      </div>
    </div>
  )
}

export default HowCanIHelp
