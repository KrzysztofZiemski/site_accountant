import React, { useState } from "react"
import styled from "styled-components"
import { Burger } from "../Burger/Burger"
import Logo from "../Logo/Logo"
import NavMenuItem from "../NavMenuItem/NavMenuItem"

import "./Navigation.css"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  //
  return (
    <nav
      className={`sticky bg-white my-1 p-0 top-0 w-full flex flex-col lg:flex-row lg:items-center transition-all ease-in duration-400 z-50`}
    >
      <div className="flex items-center p-2 justify-between flex-wrap px-2 lg:mx-4 xl:mx-4 bg-white z-50 lg:hidden">
        <span>
          <Logo />
        </span>

        <Burger isOpen={isOpen} onClick={handleOpen} />
      </div>
      <ul
        className={`lg:flex top-full w-full font-monTserrat absolute lg:static lg:justify-center lg:align-center text-base bg-white transition-all ease-in duration-400 overflow-hidden  ${
          isOpen ? "nav-full" : "h-0"
        } lg:h-auto`}
      >
        <NavMenuItem to="/" className="lg:mr-9">
          <span className="hidden lg:block">
            <Logo />
          </span>
        </NavMenuItem>
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
