import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
//@ts-ignore
import CheckItemIcon from "../../assets/checked.svg"
import { routes } from "../../routes"
export const query = graphql`
  {
    file(name: { regex: "/regulamin/" }) {
      publicURL
    }
  }
`
interface OfferPromotionProps {
  className: string
}
export const OfferPromotion = (props: OfferPromotionProps) => {
  const { file } = useStaticQuery(query)
  const promotionRules = file.publicURL
  const downloadPromotionRules = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    window.open(promotionRules)
  }

  return (
    <div {...props}>
      {" "}
      <h2 className="text-xl uppercase my-2 sm:my-4 md:my-6">
        Aktualne promocje
      </h2>
      <p className="leading-7 mb-2">
        <strong>Uzyskaj profesjonalną obsługę księgową.</strong>
      </p>
      <p className="py-3 text-lg">Oferujemy:</p>
      <div className="flex items-center mb-3">
        <CheckItemIcon className="w-9 h-9 mr-6 flex-shrink-0" />
        <p className="text-bold">
          Obniżenie opłaty w pierwszym miesiącu świadczenia usług do zaledwie
          1zł.
        </p>
      </div>
      <div className="flex items-center mb-3">
        <CheckItemIcon className="w-9 h-9 mr-6 flex-shrink-0" />
        <p>Usługi księgowe na najwyższym poziomie.</p>
      </div>
      <p className="mt-7">
        Sprawdź nas{" "}
        <a
          href={promotionRules}
          onClick={downloadPromotionRules}
          className="text-pink-600"
        >
          regulamin promocji
        </a>{" "}
        i{" "}
        <Link to={routes.contact} className="text-primary">
          skontaktuj się z nami
        </Link>
        .
      </p>
    </div>
  )
}

OfferPromotion.defaultProps = {
  className: "",
}
