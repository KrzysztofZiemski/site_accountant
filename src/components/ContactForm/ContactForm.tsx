import React, { ChangeEvent, useState, lazy, FormEvent, useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { InputText } from "../Input/InputText"
import { Textarea } from "../Textarea/Textarea"
import { Button } from "../Button/Button"
import { encode } from "../../helpers/request"
import { Modal } from "../Modal/Modal"

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

const regexpPhone = new RegExp(/^\d{9}$/)
const regexpMail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
const regexpMessage = new RegExp(/[^()]/)

interface SendDataMail {
  mail: string
  phone: string
  message: string
}
interface ErrorFetch {
  isError: boolean
  headerMessage: string
  message: string
}

const errorFetchDefault = {
  isError: false,
  headerMessage: "",
  message: "",
}

enum TypeOfContactClient {
  phone = "phone",
  mail = "mail",
}

export const ContactForm = ({ ...props }) => {
  const [phone, setPhone] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const [recaptcha, setRecaptcha] = useState("")
  const [typeOfContactClient, SettypeOfContactClient] = useState(
    TypeOfContactClient.mail
  )
  const [failValid, setFailValid] = useState({})

  const [submited, setSubmited] = useState(false)
  const [errorFetch, setErrorFetch] = useState(errorFetchDefault)

  const toggleErrors = (): void => {
    setFailValid({
      phone: !regexpPhone.test(phone),
      mail: !regexpMail.test(mail),
      message: !regexpMessage.test(message),
      recaptcha: recaptcha === "" ? true : false,
    })
  }
  const validate = (): boolean => {
    const phoneOk = regexpPhone.test(phone)
    const mailOk = regexpMail.test(mail)
    const messageOk = regexpMessage.test(message)
    const recaptchaOk = recaptcha === "" ? false : true
    return (phoneOk || mailOk) && messageOk && recaptchaOk
  }

  const handleChangePhone = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPhone((target as HTMLInputElement).value)
  }
  const clearForm = () => {
    setFailValid({})
    setPhone("")
    setMail("")
    setMessage("")
  }

  const handleChangeMail = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMail((target as HTMLInputElement).value)
  }

  const handleChangeMessage = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage((target as HTMLTextAreaElement).value)
  }

  const sendMail = () => {
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        "g-recaptcha-response": recaptcha,
        phone,
        mail,
        message,
      }).toString(),
    })
  }
  const verifyRecaptcha = response => {
    setRecaptcha(response)
  }
  const closeErrorModal = () => setErrorFetch(errorFetchDefault)
  const handleTypeOfContactClient = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement
    //@ts-ignore
    const value: TypeOfContactClient.mail | TypeOfContactClient.phone =
      target.value
    SettypeOfContactClient(value)
  }
  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isOk = validate()
    if (!isOk) return toggleErrors()
    sendMail()
      .then(res => {
        if (res.ok) return setSubmited(true)
        setErrorFetch({
          isError: true,
          headerMessage: "Nie udało się wysłać wiadomości.",
          message:
            "Przepraszamy - wystąpił błąd podczas wysyłania. Spróbuj ponownie",
        })
      })
      .catch(error =>
        setErrorFetch({
          isError: true,
          headerMessage: "Nie udało się wysłać wiadomości.",
          message:
            "Przepraszamy - wystąpił błąd podczas wysyłania. Spróbuj ponownie",
        })
      )
    clearForm()
  }

  return (
    <div className="bg-white rounded px-2 pt-6 pb-5 w-full overflow-hidden">
      <h3 className="text-center text-2xl p-3 mb-6">Formularz kontaktowy</h3>
      {errorFetch.isError && (
        <Modal
          onClose={closeErrorModal}
          header={errorFetch.headerMessage}
          text={errorFetch.message}
        />
      )}
      {submited ? (
        <p className="font-bold text-center text-primary text-base md:text-xl leading-10">
          Dziękuję za kontakt.
          <br />
          Skontaktuję się w najbliższym terminie.
        </p>
      ) : (
        <form
          // onReset={}
          name="contact"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
          className="m-auto w-5/5 sm:w-3/5 md:w-full sm:text-center"
          action="/thank-you"
          {...props}
          onSubmit={handleSend}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex text-right text-xl">
            <select
              value={typeOfContactClient}
              onChange={handleTypeOfContactClient}
              className="block appearance-none w-full border py-2 px-3 rounded outline-none"
            >
              <option value={TypeOfContactClient.mail}>E-mail</option>
              <option value={TypeOfContactClient.phone}>Telefon</option>
            </select>
          </div>
          {typeOfContactClient === TypeOfContactClient.phone && (
            <InputText
              placeholder="Numer telefonu"
              name="phone"
              onChange={handleChangePhone}
              value={phone}
              error={failValid["phone"]}
            ></InputText>
          )}
          {typeOfContactClient === TypeOfContactClient.mail && (
            <InputText
              name="mail"
              placeholder="Adres e-mail"
              onChange={handleChangeMail}
              value={mail}
              error={failValid["mail"]}
            ></InputText>
          )}

          <Textarea
            label="WIADOMOŚĆ"
            name="message"
            rows={5}
            onChange={handleChangeMessage}
            value={message}
            error={failValid["message"]}
          ></Textarea>
          <div
            className={`flex justify-center w-full ${
              failValid["recaptcha"] && "border text-red-600"
            }`}
          >
            <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={verifyRecaptcha} />
          </div>
          <div className="flex flex-col m-auto w-full md:w-4/5 lg:w-2/5 mt-4">
            <Button>WYŚLIJ</Button>
          </div>
        </form>
      )}
    </div>
  )
}
