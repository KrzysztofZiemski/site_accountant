import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Calendar } from "../Calendar/Calendar"

import { EventDashboard } from "./EventDashboard/EventDashboard"

const query = graphql`
  {
    allDatoCmsTerm {
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

  return (
    <div className="mx-2">
      <div>
        <Calendar
          date={selectedDate}
          markedDays={events.map(({ dayOfTheMonth }) => dayOfTheMonth)}
          setDate={setSelectedDate}
        />
      </div>
      <EventDashboard events={events} active={selectedDate.getDate()} />
    </div>
  )
}

export default Events
