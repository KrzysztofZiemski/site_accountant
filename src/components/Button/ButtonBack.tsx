import React from "react"

interface ButtonBackProps {
  onClick: () => void
  className?: string
  children: any
}

export const ButtonBack = ({
  children,
  className,
  ...props
}: ButtonBackProps) => {
  return (
    <button
      className={`pointer-events-auto bg-gray-200 px-6 py-2 text-xs font-medium leading-6 text-center uppercase transition rounded shadow ripple hover:shadow-lg hover:bg-secondary  focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
ButtonBack.defaultProps = {
  onClick: () => {},
}
