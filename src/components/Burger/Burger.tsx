import React, { useState } from "react"
import { graphql } from "gatsby"

type BurgerProps = {
  isOpen: boolean
  onClick: () => void
}

export const Burger = ({ isOpen, ...props }: BurgerProps) => {
  return (
    <button
      className="relative w-8 h-5 focus:outline-none lg:hidden"
      {...props}
    >
      <span
        className={`absolute transition-all border-t-2 w-full block border-primary transform ${
          isOpen ? "rotate-45 top-1/2" : "rotate-0 top-0"
        } `}
      ></span>
      <span
        className={`absolute border-t-2 w-full  block border-primary inset-y-2/4 ${
          isOpen ? "hidden" : ""
        }`}
      ></span>
      <span
        className={`absolute border-t-2 w-full  block border-primary  transition-all transform ${
          isOpen ? "-rotate-45 top-1/2" : "rotate-0 top-full"
        }`}
      ></span>
    </button>
  )
}
