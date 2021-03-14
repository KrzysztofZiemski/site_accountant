import React from "react"
import { Link } from "gatsby"

interface ButtonLink {
  to: string
  children: any
}
export const ButtonLink = ({ to, children }: ButtonLink) => {
  return (
    <Link
      to={to}
      className="inline-block bg-white text-secondary border p-4 m-3 rounded-md font-bold hover:bg-primary hover:text-white active:text-secondary active:bg-white"
    >
      {children}
    </Link>
  )
}
