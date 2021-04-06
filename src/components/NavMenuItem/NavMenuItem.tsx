import React, { useEffect } from "react"
import { Link } from "gatsby"

type NavMenuItemProps = {
  to: string
  className?: string
  children: any
}

const NavMenuItem = ({ to, children, ...props }: NavMenuItemProps) => {
  const classNameLink = `flex items-center w-full h-full py-3 lg:py-0 px-4 border-primary  text-primary  border-b-2  lg:text-sm text-md font-bold hover:bg-white hover:text-secondary  p-1 lg:border-0 rounded-sm `

  return (
    <li className=" flex items-center border-r lg:border-0" {...props}>
      <Link
        to={to || "#"}
        className={classNameLink}
        activeClassName="lg:text-secondary lg:bg-white lg:hover:text-secondary"
      >
        {children}
      </Link>
    </li>
  )
}

NavMenuItem.defaultProps = {
  to: "/",
}

export default NavMenuItem
