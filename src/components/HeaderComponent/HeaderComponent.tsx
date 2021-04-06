import React from "react"
import { SubTitle } from "./SubTitle/SubTitle"

import "./HeaderComponent.css"

interface HeaderComponentProps {
  title: string
  subTitle?: string
  className?: string
}
export const HeaderComponent = ({ title, subTitle, ...props }) => {
  return (
    <div {...props}>
      <div
        className={` mb-7 ml-3 flex items-center clients-opinion-container__recomends`}
      >
        <h2 className="flex  items-center ml-9 header-title-component uppercase">
          {title}
        </h2>
      </div>
      {subTitle && <SubTitle className="mb-9 ml-3">{subTitle}</SubTitle>}
    </div>
  )
}
