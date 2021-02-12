import React from "react"

type GoogleMapProps = {
  className: string
}

export const GoogleMap = props => {
  return (
    <iframe
      {...props}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.3722325608196!2d17.048219916075638!3d51.1015920481129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27daf6d38e9%3A0xd9ece26767767bfc!2sWaleriana%20%C5%81ukasi%C5%84skiego%2012%2C%2050-529%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1613145925626!5m2!1spl!2spl"
      aria-hidden="false"
    ></iframe>
  )
}
