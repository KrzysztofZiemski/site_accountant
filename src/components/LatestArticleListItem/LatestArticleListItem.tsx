import React from "react"
import { Link } from "gatsby"
import Image, { GatsbyImageFluidProps } from "gatsby-image"

interface LatestArticleListItemProps {
  title: string
  author: string
  date: string
  intro: string
  link: string
  image?: GatsbyImageFluidProps
  className: string
}
// / md:mt-5 md:w-2/5  lg:p-5
export const LatestArticleListItem = ({
  date,
  intro,
  author,
  title,
  image,
  link,
  className,
  ...props
}: LatestArticleListItemProps) => {
  return (
    <div
      className={`bg-white p-4 overflow-y-auto text-secondary h-60 m-2 mt-4 rounded-lg md:h-80 ring-2 flex flex-col`}
      {...props}
    >
      {image ? (
        <div>
          <Image
            fluid={image.fluid}
            className="overflow-hidden rounded-lg object-cover max-h-48 mb-4"
          />
        </div>
      ) : (
        <div></div>
      )}
      <article className="flex flex-col">
        <span className="text-xs self-end">{date}</span>
        <h2 className=" text-lg  mb-3 " style={{ fontFamily: "Lato" }}>
          <Link to={link}>{title}</Link>
        </h2>
        <p className="text-justify">{intro}</p>
        <Link
          className="text-sm self-end text-blue-800 flex-wrapmt-4"
          to={link}
        >
          czytaj dalej
        </Link>
        <address className="text-sm text-primary self-end mt-2">
          {author}
        </address>
      </article>
    </div>
  )
}

LatestArticleListItem.defaultProps = {
  date: "",
  intro: "",
  author: "",
  title: "",
  className: "",
}
