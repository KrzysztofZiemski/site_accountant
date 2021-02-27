import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Navigation } from "../components/Navigation/Navigation"
import { Footer } from "../components/Footer/Footer"
import ReactMarkdown from "react-markdown"

import "./article.css"

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      id
      feathuredImage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        alt
      }
      author
      date
      articleContent {
        ... on DatoCmsParagraph {
          contentParagraph
          id
        }
        ... on DatoCmsHeading {
          contentHeader
          id
        }
        ... on DatoCmsArticleImage {
          contentImage {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
            alt
          }
          id
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  const {
    datoCmsArticle: {
      articleContent,
      author,
      title,
      feathuredImage,
      id,
      date,
      intro,
      alt,
    },
  } = data

  const content = articleContent.map(item => {
    //do przebudowy - datocms jako pierwszy wcsika nam niepotrzebny element. Teraz jest podatne na zmianę kolejności wpisywanych parametrów w query
    if (Object.keys(item).length === 1) return null
    const itemKey = Object.keys(item)[1]

    switch (itemKey) {
      case "contentParagraph":
        return <ReactMarkdown key={item.id} children={item[itemKey]} />
      case "contentHeader":
        return <h2 key={item.id}>{item[itemKey]}</h2>
      case "contentImage":
        return (
          <Image
            style={{
              maxWidth: "54rem",
              width: "100%",
              margin: "1rem auto",
            }}
            alt={item[itemKey].alt}
            key={item.id}
            fluid={item[itemKey].fluid}
          />
        )
      default:
        return null
    }
  })

  return (
    <div className="flex flex-col min-h-screen w-full max-h-96 article-container">
      <SEO title={title} description={intro || ""} />
      <Navigation />
      <main className="mx-auto flex-grow">
        <h1 className="text-center text-xl m-5 font-bold	">{title}</h1>
        <Image
          fluid={feathuredImage.fluid}
          className="w-full h-auto object-cover	max-h-96"
          alt={feathuredImage.alt}
        />
        <div className="flex-grow p-3 text-justify	">{content}</div>
        <address className="text-right px-2 mt-2 mb-6">{author}</address>
        <time dateTime={date || ""} title="August 28th, 2011">
          {date || ""}
        </time>
      </main>
      <Footer />
    </div>
  )
}

export default PostLayout
