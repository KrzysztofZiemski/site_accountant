import React from "react"

type GoogleMapProps = {
  className: string
}

export const GoogleMap = props => {
  return (
    <iframe
      {...props}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.554069269187!2d21.07762021610294!3d52.23331906518721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecda2811b3967%3A0x67a55cf6fc32584b!2sOpinog%C3%B3rska%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1613046360123!5m2!1spl!2spl"
      aria-hidden="false"
    ></iframe>
  )
}
