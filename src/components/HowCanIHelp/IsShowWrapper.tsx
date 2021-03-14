import React from "react"

export enum showEnum {
  prev,
  show,
  next,
}

interface IsShowWrapperProps {
  show: showEnum
  children: any
}

export const IsShowWrapper = ({ children, show }: IsShowWrapperProps) => {
  const style = () => {
    let styleOption = {}

    switch (show) {
      case showEnum.show:
        styleOption = { transform: "translateX(0%)", opacity: 1 }
        break
      case showEnum.prev:
        styleOption = { transform: "translateX(-120%)", opacity: 0 }
        break
      case showEnum.next:
        styleOption = { transform: "translateX(120%)", opacity: 0 }
        break
      default:
    }
    return styleOption
  }
  return (
    <div
      className="absolute w-full h-full left-0 top-0 transition duration-500 ease-in-out transform"
      style={style()}
    >
      {children}
    </div>
  )
}
