import React from "react"

interface SubTitleProps {
  className: string
}
export const SubTitle = ({ children, className }) => {
  return (
    <h2
      style={{ fontFamily: "'Lato' sans-serif" }}
      className={`text-3xl font-bold  p-3 ${className}`}
    >
      {children}
    </h2>
  )
}

SubTitle.defaultProps = {
  className: "",
}
