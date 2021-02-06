import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

type BurgerProps = {
  isOpen: boolean
  onClick: () => void
}

const Burger = ({ isOpen, ...props }: BurgerProps) => {
  return (
    <button className="relative w-8 h-5 focus:outline-none" {...props}>
      <span
        className={`absolute transition-all border w-full block border-primary transform ${
          isOpen ? "rotate-45 top-1/2" : "rotate-0 top-0"
        } `}
      ></span>
      <span
        className={`absolute border w-full  block border-primary inset-y-2/4 ${
          isOpen ? "hidden" : ""
        }`}
      ></span>
      <span
        className={`absolute border w-full  block border-primary  transition-all transform ${
          isOpen ? "-rotate-45 top-1/2" : "rotate-0 top-full"
        }`}
      ></span>
    </button>
  )
}
export default Burger
