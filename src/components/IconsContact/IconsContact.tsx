//@ts-ignore
import PhoneIcon from "../../assets/phone-call.svg"
//@ts-ignore
import MessageIcon from "../../assets/message.svg"
import { routes } from "../../routes"
import React from "react"
import { Link, navigate } from "gatsby"
import { isMobileOnly } from "react-device-detect"
import { colors } from "../../styles/colors"

interface IconsContactProps {
  fill?: string
  className?: string
}
export const IconsContact = ({ fill, className }: IconsContactProps) => {
  const handleGoCall = () => {
    isMobileOnly ? window.open("tel:729976922") : navigate(routes.contact)
  }
  return (
    <div className={`flex items-center ${className}`}>
      <PhoneIcon
        style={{
          height: "35px",
          cursor: "pointer",
          fill: fill || colors.mainColor,
        }}
        className="mx-6 "
        onClick={handleGoCall}
        alt="telefon"
      />
      <Link to={routes.contact}>
        <MessageIcon
          className="mx-6"
          alt="e-mail"
          style={{ height: "35px", fill: colors.mainColor }}
        />
      </Link>
    </div>
  )
}
