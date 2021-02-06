import React, { useState } from "react"
import styled from "styled-components"
import Burger from "../Burger/Burger"
import Logo from "../Logo/Logo"
import NavMenuItem from "../NavMenuItem/NavMenuItem"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`sticky top-0 w-full flex flex-col ${
        isOpen ? "h-screen" : "h-screen"
      }`}
    >
      <div className="flex items-center justify-between flex-wrap py-4 px-2 lg:mx-4 xl:mx-12 bg-white z-50">
        <Logo />
        <Burger isOpen={isOpen} onClick={handleOpen} />
      </div>
      <ul
        className={`transition-transform overflow-hidden h-full transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavMenuItem active to="/about">
          O NAS
        </NavMenuItem>

        <NavMenuItem to="/offer">OFERTA</NavMenuItem>

        <NavMenuItem to="/articles">AKTUALNOŚCI</NavMenuItem>

        <NavMenuItem to="/clients">KLIENCI</NavMenuItem>

        <NavMenuItem to="/charity">DZIAŁALNOŚĆ CHARYTATYWNA</NavMenuItem>

        <NavMenuItem to="/#contanc">KONTAKT</NavMenuItem>
      </ul>
    </header>
  )
}
