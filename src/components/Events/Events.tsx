import React, { useEffect, useState, useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Calendar } from "./Calendar/Calendar"
import { DashboardEvents } from "./DashboardEvents/DashboardEvents"

import { isSameDate, showDate } from "../../helpers/date"
import { HeaderComponent } from "../HeaderComponent/HeaderComponent"
import { isMobileOnly } from "react-device-detect"

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

// const getNearestEvent = (daysEvent: Array<number>): Date => {
//   const now = new Date()
//   const todayNumber = now.getDate()
//   const todayMonth = now.getMonth()
//   const todayYear = now.getFullYear()

//   let output: Date

//   for (let i = 0; i < daysEvent.length; i++) {
//     if (daysEvent[i] >= todayNumber) {
//       output = new Date(todayYear, todayMonth, daysEvent[i])
//       break
//     }
//   }
//   return output || new Date(todayYear, todayMonth, daysEvent[0])
// }

export const Events = () => {
  const { allDatoCmsTermsCyclic, allDatoCmsTermsDate } = useStaticQuery(query)

  const cyclicEvents: Array<EventCyclicType> = allDatoCmsTermsCyclic.nodes
  const disposableEvents: Array<EventSingleType> = allDatoCmsTermsDate.nodes

  const [selectedDate, setSelectedDate] = useState(new Date())

  const cyclicItems = (() => {
    const day = selectedDate.getDate()
    const selectedEvent = cyclicEvents.find(
      eventCalendar => eventCalendar.dayOfTheMonth === day
    )
    return selectedEvent ? (
      <ReactMarkdown>{selectedEvent.description}</ReactMarkdown>
    ) : null
  })()

  const eventsItems = (() => {
    const selectedEvent = disposableEvents.find(eventCalendar =>
      isSameDate(new Date(eventCalendar.date), selectedDate)
    )
    return selectedEvent ? (
      <ReactMarkdown>{selectedEvent.description}</ReactMarkdown>
    ) : null
  })()

  const dayOfMonthCyclicEvents = useMemo(() => {
    return cyclicEvents.map(({ dayOfTheMonth }) => dayOfTheMonth)
  }, [cyclicEvents])
  const dateEvents = useMemo(() => {
    return disposableEvents.map(({ date }) => date)
  }, [cyclicEvents])

  const show = cyclicEvents.length > 0 || disposableEvents.length > 0
  return (
    <>
      {show && (
        <div className="bg-white p-4">
          <HeaderComponent
            title="Kalendarz"
            subTitle="Poznaj ważne daty"
            className="text-primary"
          />
          <div className="overflow-auto md:flex md:items-start">
            <div className="m-auto md:m-3 flex justify-center items-center max-w-sm md:w-1/2 ">
              <div className="overflow-auto border-secondary">
                <Calendar
                  className="w-96 md:h-96"
                  date={selectedDate}
                  markedDaysOfMonth={dayOfMonthCyclicEvents}
                  markedDate={dateEvents}
                  setDate={setSelectedDate}
                />
              </div>
            </div>
            {(eventsItems || cyclicItems) && (
              <DashboardEvents className="mx-auto p-3 md:w-7/8 md:w-1/2 md:flex-grow">
                <h3 className="font-bold mb-3">{showDate(selectedDate)}</h3>
                <div>{cyclicItems}</div>
                <div>{eventsItems}</div>
              </DashboardEvents>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Events
