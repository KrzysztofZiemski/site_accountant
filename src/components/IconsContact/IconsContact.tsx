//@ts-ignore
import PhoneIcon from "../../assets/phone-call.svg"
//@ts-ignore
import MessageIcon from "../../assets/message.svg"
import { routes } from "../../routes"
import React from "react"
import { Link, navigate } from "gatsby"
import { isMobileOnly } from "react-device-detect"

export const IconsContact = () => {
  const handleGoCall = () => {
    isMobileOnly ? window.open("tel:729976922") : navigate(routes.contact)
  }
  return (
    <div className="flex items-center">
      <PhoneIcon
        style={{ height: "35px", cursor: "pointer" }}
        className="mx-5 "
        onClick={handleGoCall}
        alt="telefon"
      />
      <Link to={routes.contact}>
        <MessageIcon alt="e-mail" style={{ height: "35px" }} />
      </Link>
    </div>
  )
}
