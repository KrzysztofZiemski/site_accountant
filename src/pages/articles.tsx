import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
const slugify = require("slugify")

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { ArticleListItem } from "../components/ArticleListItem/ArticleListItem"
import { FilterBar } from "../components/FilterBar/FilterBar"
import { GatsbyImageFluidProps } from "gatsby-image"

const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        author
        intro
        date
        feathuredImage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`
type ArticleListType = {
  title: string
  date: string | null
  author: string
  intro: string
  feathuredImage: GatsbyImageFluidProps
}

const filterReducer = (filter: string) => {
  const reducer = ({ title, author, date, intro }: ArticleListType) => {
    const filterFrase = filter.toLowerCase()

    const finded =
      title.toLowerCase().includes(filterFrase) ||
      author.toLowerCase().includes(filterFrase) ||
      intro.toLowerCase().includes(filterFrase)

    console.log("finded", finded)
    return finded
  }
  return reducer
}

const ArticlesPage = () => {
  const {
    allDatoCmsArticle: { nodes },
  } = useStaticQuery(query)
  const listArticles: Array<ArticleListType> = nodes
  const [filterArticlesList, setFilterArticlesList] = useState("")

  const renderListItem = () => {
    const list = nodes.filter(filterReducer(filterArticlesList))
    return list.map(({ title, author, date, intro }: ArticleListType) => (
      <ArticleListItem
        key={title}
        date={date}
        title={title}
        intro={intro}
        author={author}
        link={slugify(title, { lower: true })}
      />
    ))
  }

  const handleFilter = (filter: string) => setFilterArticlesList(filter)

  return (
    <Layout includeHeader={false}>
      <SEO title="Articles" />
      <div className="mb-10 ">
        <h1 className="text-2xl text-center p-2 text-white 	mb-6 lg:mb-12 bg-secondary md:bg-white md:text-primary md:mt-5 border-primary md:border-b-2">
          AKTUALNOŚCI
        </h1>
        <div className="my-3 flex justify-center">
          <FilterBar search={handleFilter} />
        </div>

        <ul
          className="flex flex-col px-2 flex-wrap md:flex-row md:justify-around mx-auto"
          style={{ maxWidth: "1280px" }}
        >
          {renderListItem()}
        </ul>
      </div>
    </Layout>
  )
}

export default ArticlesPage

//query not all
// {
//   allArticles(orderBy: [date_ASC], first: 5){
//     author
//     title
//     feathuredImage{
//       alt
//     }
//     articleContent{
//       ...on ArticleImageRecord{
//         contentImage{
//           alt
//         }
//       }
//     }
//   }
// }
