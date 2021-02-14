import React, { useEffect, useState, useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Calendar } from "./Calendar/Calendar"

import { Slider } from "../Slider/Slider"
import { isSameDate, showDate } from "../../helpers/date"

const query = graphql`
  {
    allDatoCmsTermsCyclic(sort: { fields: dayOfTheMonth, order: ASC }) {
      nodes {
        dayOfTheMonth
        description
      }
    }
    allDatoCmsTermsDate {
      nodes {
        date
        description
      }
    }
  }
`
export type EventCyclicType = {
  description: string
  dayOfTheMonth: number
}
export type EventSingleType = {
  description: string
  date: string
}

const getDatesFromNumber = (numberOfDay: number): Array<Date> => {
  const now = new Date()
  const actuallyMonth = now.getMonth()
  const actuallyYear = now.getFullYear()
  const thisMonth = new Date(actuallyYear, actuallyMonth, numberOfDay)
  const nextMonth = new Date(actuallyYear, actuallyMonth + 1, numberOfDay)
  return [thisMonth, nextMonth]
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
  const { allDatoCmsTermsCyclic, allDatoCmsTermsDate } = useStaticQuery(query)

  const cyclicEvents: Array<EventCyclicType> = allDatoCmsTermsCyclic.nodes
  const singleEvents: Array<EventSingleType> = allDatoCmsTermsDate.nodes

  const [selectedDate, setSelectedDate] = useState(
    getNearestEvent(cyclicEvents.map(({ dayOfTheMonth }) => dayOfTheMonth))
  )

  const events = useMemo(() => {
    const listDates = singleEvents.map(singleEvent => ({
      date: new Date(singleEvent.date),
      description: singleEvent.description,
    }))

    cyclicEvents.forEach(({ dayOfTheMonth, description }) => {
      const arrDates = getDatesFromNumber(dayOfTheMonth)
      arrDates.forEach(date => {
        const index = listDates.findIndex(item => isSameDate(item.date, date))
        if (index !== -1) {
          listDates[index].description += `\  
          ${description}`
          return
        }
        listDates.push({ date, description })
      })
    })
    listDates.sort((a, b) => a.date.getTime() - b.date.getTime())
    return listDates
  }, [])

  const activeIndex = () =>
    events.findIndex(({ date }) => isSameDate(selectedDate, date))

  const renderList = () => {
    return events.map(({ description, date }) => (
      <>
        <h3 className="mb-2 font-bold">{showDate(date)}</h3>
        <ReactMarkdown>{description}</ReactMarkdown>
      </>
    ))
  }

  return (
    <div className="md:flex md:justify-center md:items-center items-center bg-secondary py-10">
      <div className="m-auto md:m-3 flex justify-center items-center min-w- max-w-sm md:w-1/2">
        <Calendar
          date={selectedDate}
          eventDays={events.map(({ date }) => date)}
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
