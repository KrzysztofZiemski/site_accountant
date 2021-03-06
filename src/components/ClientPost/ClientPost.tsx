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
// className="overflow-y-auto h-48"
export const ClientPost = ({ name, description, score }: ClientOpinionType) => {
  const stars = useMemo(() => renderStars(score), [score])

  return (
    <article className="shadow-lg p-4 overflow-y-auto h-60 m-2 mt-4 bg-primary rounded-lg md:h-80">
      <div className="flex flex-col w-full">
        <h2 className="text-lg font-bold mb-2 text-center lg:text-left">
          {name}
        </h2>
        <div className="flex justify-self-end	self-end mb-2 md:mb-4">
          {stars}
        </div>
      </div>
      <div className="text-justify w-full ">
        <ReactMarkdown children={description} />
      </div>
    </article>
  )
}
