import React from "react"
import { Link } from "gatsby"
import Image, { GatsbyImageFluidProps } from "gatsby-image"

type ArticleListItemProps = {
  title: string
  author: string
  date: string
  intro: string
  link: string
  image: GatsbyImageFluidProps
}
// / md:mt-5 md:w-2/5  lg:p-5
export const ArticleListItem = ({
  date,
  intro,
  author,
  title,
  image,
  link,
  ...props
}: ArticleListItemProps) => {
  return (
    <li
      className="shadow-xl rounded-lg mb-10 py-3 px-6 md:w-2/5 md:m-5"
      {...props}
    >
      <div>
        <Image
          fluid={image.fluid}
          className="overflow-hidden rounded-lg object-cover max-h-48 mb-4"
        />
      </div>

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
    </li>
  )
}

ArticleListItem.defaultProps = {
  date: "",
  intro: "",
  author: "",
  title: "",
}

{
  /* <Image
            style={{
              maxWidth: "54rem",
              width: "100%",
              margin: "1rem auto",
            }}
            alt={item[itemKey].alt}
            key={item.id}
            fluid={item[itemKey].fluid}
          /> */
}
