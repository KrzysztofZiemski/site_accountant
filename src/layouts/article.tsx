import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Navigation } from "../components/Navigation/Navigation"
import { Footer } from "../components/Footer/Footer"
//nie wiem cz ybedzie działać bez layouts wtyczki(inny sposób query)

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      id
      feathuredImage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      author
      date
      articleContent {
        ... on DatoCmsParagraph {
          contentParagraph
          id
        }
        ... on DatoCmsStrong {
          contentStrong
          id
        }
        ... on DatoCmsLink {
          contentLink
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
    },
  } = data
  console.log(data)
  const content = articleContent.map(item => {
    //do przebudowy - datocms jako pierwszy wcsika nam niepotrzebny element. Teraz jest podatne na zmianę kolejności wpisywanych parametrów w query
    const itemKey = Object.keys(item)[1]

    switch (itemKey) {
      case "contentParagraph":
        return (
          <p key={item.id} className="my-2">
            {item[itemKey]}
          </p>
        )
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
            key={item.id}
            fluid={item[itemKey].fluid}
          />
        )
      case "articleLink":
        return (
          <a
            className="text-primary hover:text-secondary"
            key={item.id}
            href={item[itemKey]}
          >
            {item[itemKey]}
          </a>
        )
      case "content_Strong":
        return <strong key={item.id}>{item[itemKey]}</strong>
      default:
        return null
    }
  })

  return (
    <div className="flex flex-col min-h-screen w-full max-h-96">
      <SEO title={title} description={intro || ""} />
      <Navigation />
      <main className="mx-auto flex-grow" style={{ maxWidth: "1280px" }}>
        <h1 className="text-center text-xl m-5 font-bold	">{title}</h1>
        <Image
          fluid={feathuredImage.fluid}
          className="w-full h-auto object-cover	max-h-96"
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
