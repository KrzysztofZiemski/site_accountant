import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { SimpleSlider } from "../SimpleSlider/SimpleSlider"
import { LatestArticleListItem } from "../LatestArticleListItem/LatestArticleListItem"
import { SubTitle } from "../SubTitle/SubTitle"

const query = graphql`
  {
    allDatoCmsArticle(sort: { fields: [date], order: DESC }, limit: 5) {
      nodes {
        title
        author
        intro
        date
      }
    }
  }
`

interface ArticleIntro {
  title: string
  author: string
  intro: string
  date: string
}
export const LatestArticles = () => {
  const {
    allDatoCmsArticle: { nodes },
  } = useStaticQuery(query)
  const articleIntro: ArticleIntro[] = nodes
  const articles = useMemo(() => {
    return articleIntro.map(el => (
      <li key={el.title}>
        <LatestArticleListItem
          className="bg-white"
          {...el}
          image={null}
          link={`articles/${slugify(el.title, { lower: true })}`}
        />
      </li>
    ))
  }, [nodes])

  return (
    <>
      {articleIntro.length > 0 && (
        <div className="p-2 pb-8 bg-gray-100">
          <SubTitle className="text-secondary text-center mt-4">
            Ostatnie Artykuły
          </SubTitle>
          <SimpleSlider className="py-7 md:py-14">{articles}</SimpleSlider>
        </div>
      )}
    </>
  )
}
