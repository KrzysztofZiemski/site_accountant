import React, { useMemo } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { routes } from "../../routes"

interface ServiceItem {
  nameService: string
  price: string
  index: string
}

const sorter = (a: ServiceItem, b: ServiceItem) => {
  if (a.index < b.index) return -1
  if (a.index > b.index) return 1
  return 0
}

export const query = graphql`
  {
    allDatoCmsServiceAndPrice {
      nodes {
        nameService
        price
        index
      }
    }
  }
`
interface TableOfferProps {
  className: string
}

export const TableOffer = ({ className }: TableOfferProps) => {
  const { allDatoCmsServiceAndPrice } = useStaticQuery(query)
  const serviceItemArray: ServiceItem[] = allDatoCmsServiceAndPrice.nodes
  const servicetableItems = useMemo(() => {
    return serviceItemArray.sort(sorter).map(({ nameService, price }) => (
      <div
        key={nameService}
        className={`flex items-center w-full my-5 md:my-8 md:text-xl ${className}`}
        style={{ backgroundColor: "#0F579A" }}
      >
        <p className="w-3/4 p-2 md:p-4">{nameService}</p>
        <p className="p-2 w-1/4 md:p-4">{price}</p>
      </div>
    ))
  }, [serviceItemArray])

  return (
    <>
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
      <p>
        *Ceny usług ustalane są indywidualnie, w oparciu o ilość przetwarzanych
        dokumentów oraz czas poświęcony na obsługę klienta. Podane kwoty dotyczą
        obsługi 1-10 dokumentów i są stawkami wyjściowymi. Do ceny należy
        doliczyć podatek VAT.{" "}
      </p>
      <p>
        W celu uzyskania dodatkowych informacji{" "}
        <Link className="text-primary underline" to={routes.contact}>
          napisz do nas
        </Link>
      </p>
      .
    </>
  )
}
TableOffer.defaultProps = {
  className: "",
}
