import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  display: "flex";
  align-items: center;
`

const LOGO = styled.span``

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <span>
        <Link to="/">MAGFI</Link>
      </span>
      <ul>
        <li>
          <Link to="/about">O NAS</Link>
        </li>
        <li>
          <Link to="/offer">OFERTA</Link>
        </li>
        <li>
          <Link to="/articles">AKTUALNOŚCI</Link>
        </li>
        <li>
          <Link to="/clients">KLIENCI</Link>
        </li>
        <li>
          <Link to="/#contanc">KONTAKT</Link>
        </li>
      </ul>
    </NavigationWrapper>
  )
}
