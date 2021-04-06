import React from "react"

interface ButtonWhiteProps {
  onClick: () => void
  className?: string
  children: any
  style?: object
}

export const ButtonWhite = ({ children, ...props }: ButtonWhiteProps) => {
  return (
    <button
      className="w-full pointer-events-auto border-2 inline-block px-4 py-4 text-base font-medium leading-6 tracking-wide text-center text-primary uppercase transition bg-white rounded shadow ripple hover:shadow-lg hover:bg-secondary  focus:outline-none active:bg-primary sm:text-xl md:py-6 md:px-8 h-full"
      {...props}
    >
      {children}
    </button>
  )
}
