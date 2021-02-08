import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Burger } from "../Burger/Burger"
import LogoWhite from "../Logo/LogoWhite"
import NavMenuItem from "../NavMenuItem/NavMenuItem"

import "./Navigation.css"
import LogoBlue from "../Logo/LogoBlue"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  //
  return (
    <nav
      className={`sticky p-0 top-0 w-full flex flex-col lg:flex-row lg:items-center transition-all ease-in duration-400 z-50 bg-white lg:bg-secondary text-white`}
    >
      <div className="flex items-center p-2 justify-between flex-wrap px-2 lg:mx-4 xl:mx-4 z-50 lg:hidden">
        <span>
          <Link to="/">
            <LogoBlue />
          </Link>
        </span>
        <Burger isOpen={isOpen} onClick={handleOpen} />
      </div>
      <ul
        className={`bg-white lg:bg-transparent md:bg-in lg:flex top-full w-full font-monTserrat absolute lg:static lg:justify-center lg:align-center text-base  transition-all ease-in duration-400 overflow-auto ${
          isOpen ? "nav-full" : "h-0"
        } lg:h-auto`}
      >
        <Link to="/" className="lg:mr-9 hidden lg:block py-2 pr-9">
          <LogoWhite />
        </Link>
        <NavMenuItem to="/about">O NAS</NavMenuItem>

        <NavMenuItem to="/offer">OFERTA</NavMenuItem>

        <NavMenuItem to="/articles">AKTUALNOŚCI</NavMenuItem>

        <NavMenuItem to="/clients">KLIENCI</NavMenuItem>

        <NavMenuItem to="/charity">DZIAŁALNOŚĆ CHARYTATYWNA</NavMenuItem>

        <NavMenuItem to="/#contact">KONTAKT</NavMenuItem>
      </ul>
    </nav>
  )
}
