import React from "react"

interface ButtonProps {
  onClick: () => void
  className?: string
  children: any
  small: boolean
  style?: object
}

export const Button = ({ children, small, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-full pointer-events-auto border-2	inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-primary rounded shadow ripple hover:shadow-lg hover:bg-secondary  focus:outline-none active:bg-primary md:text-2xl md:py-3 md:px-8 h-full ${
        small ? "lg:text-base lg:px-2 lg:py-1" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
Button.defaultProps = {
  small: false,
  onClick: () => {},
}
