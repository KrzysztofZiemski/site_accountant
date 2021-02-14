import React, { ChangeEvent, useState, lazy } from "react"
import Recaptcha from "react-recaptcha"
import { SITE_KEY } from "../../../config"
import { InputText } from "../Input/InputText"
import { Textarea } from "../Textarea/Textarea"
import { Button } from "../Button/Button"

const regexpPhone = new RegExp(/^\d{9}$/)
const regexpMail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
const regexpMessage = new RegExp(/[^()]/)

interface SendDataMail {
  mail: string
  phone: string
  message: string
}

export const ContactForm = ({ ...props }) => {
  const [phone, setPhone] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [recaptcha, setRecaptcha] = useState("")
  const [failValid, setFailValid] = useState({})
  const [submited, setSubmited] = useState(false)

  const toggleErrors = (): void => {
    setFailValid({
      phone: !regexpPhone.test(phone),
      mail: !regexpMail.test(mail),
      message: !regexpMessage.test(message),
      recaptcha: recaptcha ? true : false,
    })
  }
  const validate = (): boolean => {
    const phoneOk = regexpPhone.test(phone)
    const mailOk = regexpMail.test(mail)
    const messageOk = regexpMessage.test(message)
    const recapthaOk = recaptcha ? true : false
    return (phoneOk || mailOk) && messageOk && recapthaOk
  }

  const handleChangePhone = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPhone((target as HTMLInputElement).value)
  }
  const clearForm = () => {
    setFailValid({})
    setPhone("")
    setMail("")
    setMessage("")
    setRecaptcha("")
  }

  const handleChangeMail = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMail((target as HTMLInputElement).value)
  }

  const handleChangeMessage = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage((target as HTMLTextAreaElement).value)
  }
  const handleRecaptcha = response => {
    setRecaptcha(response)
  }
  const sendMail = (data: SendDataMail) => {}

  const handleSend = event => {
    event.preventDefault()
    const isOk = validate()
    if (!isOk) return toggleErrors()
    sendMail({ phone, mail, message })
    setSubmited(true)
    clearForm()
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full overflow-hidden">
      {submited ? (
        <p className="font-bold text-center text-primary text-base md:text-xl leading-10">
          Dziękuję za kontakt.
          <br />
          Skontaktuję się w najbliższym terminie.
        </p>
      ) : (
        <form
          className="m-auto w-5/5 sm:w-3/5 lg:w-2/5 sm:text-center"
          {...props}
          onSubmit={handleSend}
        >
          <h2 className="text-center text-lg font-bold mb-4">KONTAKT</h2>
          <InputText
            name="phone"
            label="TELEFON"
            onChange={handleChangePhone}
            value={phone}
            error={failValid["phone"]}
          ></InputText>
          <InputText
            label="ADRES E-MAIL"
            name="mail"
            onChange={handleChangeMail}
            value={mail}
            error={failValid["mail"]}
          ></InputText>
          <Textarea
            label="WIADOMOŚĆ"
            name="message"
            rows={5}
            onChange={handleChangeMessage}
            value={message}
            error={failValid["message"]}
          ></Textarea>
          <div className="m-auto mb-4 flex justify-center items-center ">
            <Recaptcha verifyCallback={handleRecaptcha} sitekey={SITE_KEY} />
          </div>
          <div className="flex flex-col m-auto w-full md:w-4/5 lg:w-2/5">
            <Button>WYŚLIJ</Button>
          </div>
        </form>
      )}
    </div>
  )
}
