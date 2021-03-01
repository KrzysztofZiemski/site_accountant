import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"

interface ServiceItem {
  nameService: string
  price: string
}

export const query = graphql`
  {
    allDatoCmsServiceAndPrice {
      nodes {
        nameService
        price
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
    return serviceItemArray.map(({ nameService, price }) => (
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
  )
}
TableOffer.defaultProps = {
  className: "",
}
