import React, { useMemo } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"
import { routes } from "../routes"
//@ts-ignore
import SuccessIcon from "../assets/success2.svg"
export const query = graphql`
  {
    datoCmsMetaDataPage(namePage: { eq: "oferta" }) {
      namePage
      title
      description
    }
    allDatoCmsServiceAndPrice {
      nodes {
        nameService
        price
      }
    }
    file(name: { regex: "/regulamin/" }) {
      relativePath
    }
  }
`
interface ServiceItem {
  nameService: string
  price: string
}

const OfferPage = ({ data }) => {
  const { title, description } = data.datoCmsMetaDataPage
  const serviceItemArray: ServiceItem[] = data.allDatoCmsServiceAndPrice.nodes
  const promotionRules = data.file.relativePath

  const servicetableItems = useMemo(() => {
    return serviceItemArray.map(({ nameService, price }) => (
      <div
        key={nameService}
        className="flex items-center w-full my-5 md:my-8 md:text-xl "
        style={{ backgroundColor: "#0F579A" }}
      >
        <p className="w-3/4 p-2 md:p-4">{nameService}</p>
        <p className="p-2 w-1/4 md:p-4">{price}</p>
      </div>
    ))
  }, [serviceItemArray])

  const downloadPromotionRules = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    window.open(promotionRules)
  }
  return (
    <Layout>
      <SEO title={title || "Offer"} description={description || ""} />
      <SiteTitle>Cennik</SiteTitle>
      <div className="p-2 mx-auto text-secondary leading-6	mb-2">
        <h2 className="text-xl uppercase my-2">Aktualne promocje</h2>
        <p className="leading-7 mb-2">
          <strong>
            Uzyskaj profesjonalną obsługę księgową przez 2 miesiące za darmo.
          </strong>
        </p>
        <p className="py-3">Oferujemy:</p>
        <div className="flex items-center  mb-2">
          <SuccessIcon className="w-8 h-8 mr-6 flex-shrink-0" />
          <p>
            Zwolnienie opłaty przez pierwsze 2 miesiące współpracy, podpisując
            umowę na 12 misięcy.
          </p>
        </div>
        <div className="flex items-center  mb-2">
          <SuccessIcon className="w-8 h-8 mr-6 flex-shrink-0" />
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
      <div className="relative bg-secondary text-white w-full">
        <div className="flex border-b md:text-xl">
          <p className="w-3/4 p-2">Usługa</p>
          <p className="p-2 w-1/4">Cena netto</p>
        </div>
        <div>{servicetableItems}</div>
        <span
          className="absolute left-3/4 top-0 bg-white"
          style={{ height: "100%", width: "1px", zIndex: 10 }}
        ></span>
      </div>
    </Layout>
  )
}

export default OfferPage
