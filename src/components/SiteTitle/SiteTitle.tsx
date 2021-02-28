import React from "react"

export const SiteTitle = ({ children }) => {
  return (
    <h1 className="text-2xl text-center p-2 text-white bg-secondary md:bg-white md:text-primary md:mt-5 border-primary md:border-b-2">
      {children}
    </h1>
  )
}
