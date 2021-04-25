import React, { useMemo, useState } from "react"
import { Link } from "gatsby"
import { useCookies } from "react-cookie"
import { routes } from "../../routes"

function setCookie(name: string, value: string, days: number) {
  let expires = ""
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

export enum cookiesName {
  googleAnalytics = "gatsby-gdpr-google-analytics",
  googleTagManager = "gatsby-gdpr-google-tagmanager",
  facebookPixel = "gatsby-gdpr-facebook-pixel",
}

export const CookieBanner = () => {
  const [cookieAgreeUse, setCookieAgreeUse] = useCookies([
    cookiesName.googleAnalytics,
    cookiesName.googleTagManager,
    cookiesName.facebookPixel,
  ])
  const [isJustSettedCookie, setIsJustSettedCookie] = useState(false)
  const setAgreeCookie = () => {
    const farFutureDate = new Date(new Date().getFullYear() + 4, 1, 1)
    setCookie(cookiesName.googleAnalytics, "true", 5 * 365)
    setCookie(cookiesName.googleTagManager, "true", 5 * 365)
    setCookie(cookiesName.facebookPixel, "true", 5 * 365)
    setIsJustSettedCookie(true)
  }

  const isAccepted = useMemo(() => {
    return (
      (cookieAgreeUse[cookiesName.facebookPixel] === "true" &&
        cookieAgreeUse[cookiesName.googleAnalytics] === "true" &&
        cookieAgreeUse[cookiesName.googleTagManager] === "true") ||
      isJustSettedCookie
    )
  }, [cookieAgreeUse, isJustSettedCookie])

  return (
    !isAccepted && (
      <aside className="z-50 w-screen fixed bottom-0 bg-primary-opacity">
        <section className="w-full lg:px-24 ">
          <div className="">
            <div className="p-4 text-xl">
              <p className="text-center md:text-left text-white text-sm leading-tight md:pr-12">
                Na naszych stronach używamy technologii, takich jak pliki
                cookie, do zbierania i przetwarzania danych w celu
                personalizowania treści oraz analizowania ruchu na stronach i w
                Internecie. Prosimy o zapoznanie się ze szczegółowymi
                informacjami zawartymi w{" "}
                <Link to={routes.policy} className="text-secondary">
                  polictyce prywatności
                </Link>{" "}
                przed przejściem do serwisu. Klikając przycisk „Wyrażam zgodę”
                lub zamykając to okno zgadzasz się na postanowienia zawarte w
                stosowanych przez nas zasadach.
              </p>
            </div>
            <div className="px-3 text-center flex overflow-hidden flex-wrap justify-center items-center">
              <Link
                to={routes.policy}
                className="py-2 px-8 bg-green-500 hover:bg-green-600 text-white rounded font-bold text-sm shadow-xl m-4"
              >
                Polityka prywatności
              </Link>
              <button
                onClick={setAgreeCookie}
                id="btn"
                className="py-2 px-8 bg-green-500 hover:bg-green-600 text-white rounded font-bold text-sm shadow-xl m-4"
              >
                Zaakceptuj ciasteczka
              </button>
            </div>
          </div>
        </section>
      </aside>
    )
  )
}
