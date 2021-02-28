import React from "react"

//@ts-ignore
import PhoneIcon from "../../assets/phone-call.svg"
//@ts-ignore
import PointerIcon from "../../assets/location-pointer.svg"

export const ContactInfo = () => {
  return (
    <div>
      <PhoneIcon className="w-12 h-12 mb-4" style={{ marginLeft: "17px" }} />
      <h2 className="mb-4 text-2xl">
        <strong>Kontakt ze mną</strong>
      </h2>
      <div>
        <p>
          Telefon: <span className="text-primary">604065485</span>
        </p>
        <p>
          E-mail: <span className="text-primary">magifi@gmail.com</span>
        </p>
        <p>
          Facebook:{" "}
          <a href="https://www.facebook.com/magfipol" className="text-primary">
            facebook.com/magfipol
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-xl">Godziny pracy</p>
        <p>
          pon. - pt. w godzinach <strong>7-20</strong>
        </p>
      </div>
      <div className="mt-10">
        <PointerIcon className="w-12 h-12 mb-4" style={{ fill: "black" }} />
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
