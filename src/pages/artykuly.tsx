import React, { useState } from "react"
import { graphql } from "gatsby"
const slugify = require("slugify")

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { ArticleListItem } from "../components/ArticleListItem/ArticleListItem"
import { FilterBar } from "../components/FilterBar/FilterBar"
import { GatsbyImageFluidProps } from "gatsby-image"
import { SiteTitle } from "../components/SiteTitle/SiteTitle"
import { list } from "postcss"

export const query = graphql`
  {
    allDatoCmsArticle(sort: { fields: [date], order: DESC }) {
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
    datoCmsMetaDataPage(namePage: { eq: "aktualnosci" }) {
      namePage
      title
      description
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

    return (
      title.toLowerCase().includes(filterFrase) ||
      author.toLowerCase().includes(filterFrase) ||
      intro.toLowerCase().includes(filterFrase)
    )
  }
  return reducer
}

const ArticlesPage = ({
  data: {
    allDatoCmsArticle: { nodes },
    datoCmsMetaDataPage,
  },
}) => {
  const listArticles: Array<ArticleListType> = nodes
  const [filterArticlesList, setFilterArticlesList] = useState("")

  const renderListItem = () => {
    const list = nodes.filter(filterReducer(filterArticlesList))
    return list.map(
      ({ title, author, date, intro, feathuredImage }: ArticleListType) => (
        <ArticleListItem
          key={title}
          date={date}
          title={title}
          intro={intro}
          author={author}
          link={slugify(title, { lower: true })}
          image={feathuredImage}
        />
      )
    )
  }

  const handleFilter = (filter: string) => setFilterArticlesList(filter)

  const { title, description } = datoCmsMetaDataPage
  return (
    <Layout>
      <SEO title={title || "Articles"} description={description || "opis"} />
      <div className="mb-10 ">
        <SiteTitle>Aktualności</SiteTitle>
        {listArticles.length > 0 ? (
          <>
            <div className="my-3 flex justify-center">
              <FilterBar search={handleFilter} />
            </div>

            <ul className="flex flex-col px-2 flex-wrap md:flex-row md:justify-center mx-auto">
              {renderListItem()}
            </ul>
          </>
        ) : (
          <div className="pt-12">
            <p className="text-center md:text-1xl">
              Niestety nie zostały jeszcze dodane żadne artykuły
            </p>
          </div>
        )}
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
// /sort: { fields: [publicationDate], order: DESC }, limit: 5
