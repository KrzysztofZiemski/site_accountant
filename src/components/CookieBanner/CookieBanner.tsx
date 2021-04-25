import React, { useMemo } from "react"
import { Link } from "gatsby"
import { useCookies } from "react-cookie"
import { routes } from "../../routes"

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
  console.log("cookieAgreeUse", cookieAgreeUse)
  console.log(
    " cookieAgreeUse[cookiesName.facebookPixel]",
    cookieAgreeUse[cookiesName.facebookPixel]
  )
  console.log(
    " cookieAgreeUse[cookiesName.googleAnalytics]",
    cookieAgreeUse[cookiesName.googleAnalytics]
  )
  console.log(
    "cookieAgreeUse[cookiesName.googleTagManager]",
    cookieAgreeUse[cookiesName.googleTagManager]
  )

  const setAgreeCookie = () => {
    console.log("weszło")
    const farFutureDate = new Date(new Date().getFullYear() + 4, 1, 1)
    const options = {
      expires: farFutureDate,
    }
    console.log("options", options)
    setCookieAgreeUse(cookiesName.googleAnalytics, true, options)
    setCookieAgreeUse(cookiesName.googleTagManager, true, options)
    setCookieAgreeUse(cookiesName.facebookPixel, true, options)
    console.log("po")
  }

  const isAccepted = useMemo(() => {
    return (
      cookieAgreeUse[cookiesName.facebookPixel] === "true" &&
      cookieAgreeUse[cookiesName.googleAnalytics] === "true" &&
      cookieAgreeUse[cookiesName.googleTagManager] === "true"
    )
  }, [cookieAgreeUse])

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
