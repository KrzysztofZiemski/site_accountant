import React from "react"

type GoogleMapProps = {
  className: string
}

export const GoogleMap = props => {
  return (
    <iframe
      id="company-base"
      {...props}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.6841994377978!2d17.04967913745921!3d51.10166278740411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c02d03f40581bf2!2sMagfi%20Magdalena%20Pol!5e0!3m2!1spl!2spl!4v1614185594038!5m2!1spl!2spl"
      aria-hidden="false"
      loading="lazy"
    ></iframe>
  )
}
