import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Calendar } from "./Calendar/Calendar"

import { Slider } from "../Slider/Slider"

const query = graphql`
  {
    allDatoCmsTerm(sort: { fields: dayOfTheMonth, order: ASC }) {
      nodes {
        dayOfTheMonth
        description
      }
    }
  }
`
export type EventType = {
  description: string
  dayOfTheMonth: number
}
const getNearestEvent = (daysEvent: Array<number>): Date => {
  const now = new Date()
  const todayNumber = now.getDate()
  const todayMonth = now.getMonth()
  const todayYear = now.getFullYear()

  let output: Date

  for (let i = 0; i < daysEvent.length; i++) {
    if (daysEvent[i] >= todayNumber) {
      output = new Date(todayYear, todayMonth, daysEvent[i])
      break
    }
  }
  return output
}

export const Events = () => {
  const {
    allDatoCmsTerm: { nodes },
  } = useStaticQuery(query)
  const events: Array<EventType> = nodes

  const [selectedDate, setSelectedDate] = useState(
    getNearestEvent(events.map(({ dayOfTheMonth }) => dayOfTheMonth))
  )

  const activeIndex = () =>
    events.findIndex(
      ({ dayOfTheMonth }) => dayOfTheMonth === selectedDate.getDate()
    )

  const renderList = () => {
    return events.map(({ description, dayOfTheMonth }) => (
      <>
        <h3>Dzień {dayOfTheMonth}</h3>
        <ReactMarkdown>{description}</ReactMarkdown>
      </>
    ))
  }

  return (
    <div className="md:flex md:justify-center md:items-center items-center bg-secondary">
      <div className="m-auto md:m-3 flex justify-center items-center min-w- max-w-sm md:w-1/2">
        <Calendar
          date={selectedDate}
          markedDays={events.map(({ dayOfTheMonth }) => dayOfTheMonth)}
          setDate={setSelectedDate}
        />
      </div>
      <Slider
        list={renderList()}
        className="h-48 md:h-72 md:w-1/2"
        activeIndex={activeIndex()}
      />
    </div>
  )
}

export default Events
