import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Calendar } from "../Calendar/Calendar"

const query = graphql`
  {
    allDatoCmsImportatntTerm {
      nodes {
        date
        description
        cyclicTerm
      }
    }
  }
`
type EventType = {
  date: string
  description: string
  cyclicTerm: number
}

export const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const {
    allDatoCmsImportatntTerm: { nodes },
  } = useStaticQuery(query)
  const events: Array<EventType> = nodes

  return (
    <div>
      <Calendar
        date={selectedDate}
        // events={events.map(({ date, cyclicTerm }) => new Date(date))}
        setDate={setSelectedDate}
      />
    </div>
  )
}

export default Events
