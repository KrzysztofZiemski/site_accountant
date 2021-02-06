import React, { useEffect } from "react"
import { Link } from "gatsby"

type NavMenuItemProps = {
  to: string
}

const NavMenuItem = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to || "#"}
        className={` block active border-b-2 m-3  lg:inline-block text-md font-bold sm:hover:border-indigo-400 hover:text-orange-500 mx-2 focus:text-blue-500 p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-sm `}
        activeClassName="text-primary"
      >
        {children}
      </Link>
    </li>
  )
}

NavMenuItem.defaultProps = {
  to: "/",
  active: false,
}

export default NavMenuItem
