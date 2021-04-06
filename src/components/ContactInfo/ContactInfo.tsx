import React from "react"

//@ts-ignore
import HouseIcon from "../../assets/house.svg"
//@ts-ignore
import PhoneIcon from "../../assets/phone-call.svg"
//@ts-ignore
import PointerIcon from "../../assets/location-pointer.svg"
//@ts-ignore
import MessageIcon from "../../assets/message.svg"
//@ts-ignore
import FacebookIcon from "../../assets/facebook.svg"
import { isMobileOnly } from "react-device-detect"

export const ContactInfo = () => {
  const handleGoCall = () => {
    isMobileOnly && window.open("tel:729976922")
  }
  return (
    <div>
      <HouseIcon className="w-12 h-12 mb-4" style={{ marginLeft: "17px" }} />
      <h2 className="mb-4 text-2xl">
        <strong>Kontakt ze mną</strong>
      </h2>
      <div>
        <div onClick={handleGoCall} className="flex my-1">
          <PhoneIcon alt="telefon" className="w-5 mr-4" />
          <span className="text-primary">729976922</span>
        </div>
        <div className="flex my-1">
          <MessageIcon alt="e-mail" className="w-5 mr-4" />
          <span className="text-primary">kontakt.magfi@gmail.com</span>
        </div>
        <div className="flex my-1">
          <FacebookIcon
            alt="facebook"
            className="w-5 mr-4"
            style={{ fill: "black" }}
          />
          <a href="https://www.facebook.com/magfipol" className="text-primary">
            facebook.com/magfipol
          </a>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xl">Godziny pracy</p>
        <p>
          pon. - pt. w godzinach <strong>7-20</strong>
        </p>
      </div>
      <div className="mt-10">
        <PointerIcon
          className="w-12 h-12 mb-4"
          style={{ fill: "black" }}
          alt="nasze biuro"
        />
        <h2 className="mb-4 text-2xl">Nasze biuro</h2>
        <address>
          <p className="text-xl mb-2">
            <strong>MagFi</strong>
          </p>
          <p> 50-436 Wrocław Łukasińskiego 12-14/4</p>
          <p>NIP 9151737051</p>
          <p>REGON 380206135</p>
        </address>
      </div>
    </div>
  )
}
