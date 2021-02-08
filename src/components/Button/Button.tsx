import React from "react"

type ButtonProps = {
  onClick?: () => void
  className?: string
  children: any
  style?: object
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="pointer-events-auto border-2	inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-primary rounded shadow ripple hover:shadow-lg hover:bg-secondary  focus:outline-none active:bg-primary md:text-2xl md:py-3 md:px-8"
      {...props}
    >
      {children}
    </button>
  )
}
