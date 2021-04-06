import React, { useMemo } from "react"
import ReactMarkdown from "react-markdown"

//@ts-ignore
import { RatingStar } from "../RatingStar/RatingStar"
import "./ClientPost.css"

type ClientOpinionType = {
  name: string
  description: string
  score: number
  className: string
  company: string
  link?: string
}

const renderStars = (score: number) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      stars.push(<RatingStar key={i} className="h-4 w-4 sm:h-5 sm:w-5" />)
    } else {
      stars.push(<RatingStar key={i} className="h-5 w-5" fill="#e2e2e2" />)
    }
  }
  return stars
}

export const ClientPost = ({
  name,
  description,
  score,
  className,
  company,
  link,
}: ClientOpinionType) => {
  const stars = useMemo(() => renderStars(score), [score])

  return (
    <article
      className={`bg-white-opacity p-4 overflow-y-auto overflow-x-hidden text-secondary h-96 md:h-72 m-2 mt-4 rounded-lg ring-2 flex flex-col ${className}`}
    >
      <div className="flex w-full justify-between items-center border-b p-2">
        <h2 className="ml-4 sm:text-lg font-bold text-center lg:text-left">
          {link ? <link href={link}>{company}</link> : company}
        </h2>
        <div className="flex justify-self-end	self-end flex-shrink-0">
          {stars}
        </div>
      </div>
      <div className="text-center sm:text-left w-full flex-grow rounded-md p-2">
        <ReactMarkdown children={description} />
        <span className="block text-right mr-1 mt-3">{name}</span>
      </div>
    </article>
  )
}
ClientPost.defaultProps = {
  className: "",
}
