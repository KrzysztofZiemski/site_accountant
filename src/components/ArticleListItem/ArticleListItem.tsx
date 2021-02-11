import React from "react"
import { Link } from "gatsby"

type ArticleListItemProps = {
  title: string
  author: string
  date: string
  intro: string
  link: string
}
// / md:mt-5 md:w-2/5  lg:p-5
export const ArticleListItem = ({
  date,
  intro,
  author,
  title,
  link,
}: ArticleListItemProps) => {
  return (
    <li className="ring-4 ring-primary rounded-lg mb-10 py-1 px-3 lg:w-2/4 lg:m-12">
      <article className="flex flex-col">
        <span className="text-xs self-end">{date}</span>
        <h2 className="text-center text-lg font-bold mb-3 text-primary">
          <Link to={link}>{title}</Link>
        </h2>
        <p className="text-justify">{intro}</p>
        <Link
          className="text-sm self-end text-blue-600 flex-wrapmt-4"
          to={link}
        >
          czytaj dalej
        </Link>
        <address className="text-sm self-end mt-2">{author}</address>
      </article>
    </li>
  )
}

ArticleListItem.defaultProps = {
  date: "",
  intro: "",
  author: "",
  title: "",
}
