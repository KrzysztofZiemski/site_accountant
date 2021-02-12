import React, { useMemo } from "react"
import ReactMarkdown from "react-markdown"

//@ts-ignore
import { RatingStar } from "../RatingStar/RatingStar"
import "./ClientPost.css"

type ClientOpinionType = {
  name: string
  description: string
  score: number
}

const renderStars = (score: number) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      stars.push(<RatingStar key={i} className="h-5 w-5" />)
    } else {
      stars.push(<RatingStar key={i} className="h-5 w-5" fill="#e2e2e2" />)
    }
  }
  return stars
}

export const ClientPost = ({ name, description, score }: ClientOpinionType) => {
  const stars = useMemo(() => renderStars(score), [score])

  return (
    <article className="shadow-lg p-2 flex flex-col w-full mb-3 min-h-10 justify-center items-center md:w-3/5 md:mx-5">
      <div className="flex flex-col w-full">
        <h2 className="text-lg font-bold mb-2 text-center lg:text-left">
          {name}
        </h2>
        <div className="flex justify-self-end	self-end	">{stars}</div>
      </div>
      <div className="text-justify w-full ">
        <ReactMarkdown children={description} />
      </div>
    </article>
  )
}
