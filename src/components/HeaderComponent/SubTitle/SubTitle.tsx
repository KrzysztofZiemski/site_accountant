import React from "react"

interface SubTitleProps {
  className: string
}
export const SubTitle = ({ children, className }) => {
  return (
    <h3 className={`text-3xl font-bold font-Lato  p-3 ${className}`}>
      {children}
    </h3>
  )
}

SubTitle.defaultProps = {
  className: "",
}
