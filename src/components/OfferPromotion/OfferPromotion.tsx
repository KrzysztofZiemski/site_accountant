import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
//@ts-ignore
import CheckItemIcon from "../../assets/checked.svg"
import { routes } from "../../routes"
export const query = graphql`
  {
    file(name: { regex: "/regulamin/" }) {
      relativePath
    }
  }
`
interface OfferPromotionProps {
  className: string
}
export const OfferPromotion = (props: OfferPromotionProps) => {
  const { file } = useStaticQuery(query)
  const promotionRules = file.relativePath
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
        <strong>
          Uzyskaj profesjonalną obsługę księgową przez 2 miesiące za darmo.
        </strong>
      </p>
      <p className="py-3 text-lg">Oferujemy:</p>
      <div className="flex items-center mb-3">
        <CheckItemIcon className="w-9 h-9 mr-6 flex-shrink-0" />
        <p>
          Zwolnienie opłaty przez pierwsze 2 miesiące współpracy, podpisując
          umowę na 12 misięcy.
        </p>
      </div>
      <div className="flex items-center mb-3">
        <CheckItemIcon className="w-9 h-9 mr-6 flex-shrink-0" />
        <p>Usługi księgowe na najwyższym poziomie.</p>
      </div>
      <p className="mt-7">
        Sprawdź nasz{" "}
        <a
          href={promotionRules}
          onClick={downloadPromotionRules}
          className="text-pink-600"
        >
          regulamin promocji
        </a>{" "}
        i{" "}
        <Link to={routes.contact} className="text-primary">
          sknataktuj się z nami
        </Link>
        .
      </p>
    </div>
  )
}

OfferPromotion.defaultProps = {
  className: "",
}
