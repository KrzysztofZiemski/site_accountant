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
import { call } from "../../helpers/call"
import { colors } from "../../styles/colors"
const weekNameDays = [
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
]

export const ContactInfo = () => {
  return (
    <div>
      <HouseIcon
        className="w-12 h-12 mb-4"
        style={{ marginLeft: "17px", fill: colors.secondaryColor }}
      />
      <h2 className="mb-4 text-2xl">
        <strong>Kontakt ze mną</strong>
      </h2>
      <div>
        <div onClick={call} className="flex my-1">
          <PhoneIcon
            alt="telefon"
            className="w-5 mr-4"
            style={{ fill: colors.secondaryColor }}
          />
          <span className="text-primary">729976922</span>
        </div>
        <div className="flex my-1">
          <MessageIcon
            alt="e-mail"
            className="w-5 mr-4"
            style={{ fill: colors.secondaryColor }}
          />
          <span className="text-primary">kontakt.magfi@gmail.com</span>
        </div>
        <div className="flex my-1">
          <a href="https://www.facebook.com/magfipol" className="text-primary">
            <FacebookIcon
              alt="facebook"
              className="w-5 mr-4"
              style={{ fill: colors.secondaryColor }}
            />
          </a>
          <a href="https://www.facebook.com/magfipol" className="text-primary">
            facebook.com/magfipol
          </a>
        </div>
      </div>
      <div className="mt-4 md:mr-10">
        <h3 className="text-xl mb-3">Godziny pracy</h3>
        {weekNameDays.map((day: string, index: number) => {
          const workHours = index < 5 ? "8.00-19.00" : "10.00-15.00"
          return (
            <p key={day} className="flex justify-between my-1 ">
              <span>{day}</span> <strong>{workHours}</strong>
            </p>
          )
          return
        })}
      </div>
      <div className="mt-10">
        <PointerIcon
          className="w-12 h-12 mb-4"
          style={{ fill: colors.secondaryColor }}
          alt="nasze biuro"
        />
        <h3 className="mb-4 text-2xl">Nasze biuro</h3>
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
