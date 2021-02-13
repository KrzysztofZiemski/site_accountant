import React, { useState, useEffect } from "react"
import ReactCalendar from "react-calendar"
import "./Calendar.css"
import { colors } from "../../../styles/colors"
import { isSameDate } from "../../../helpers/date"

const markDays = (markedDays: Array<number>, eventsDate: Array<Date>) => {
  return ({ activeStartDate, date, view }) => {
    const day = date.getDate()
    if (view === "month") {
      const isMarkedDay = markedDays.find(
        markedDayNumber => markedDayNumber === day
      )
        ? true
        : false

      const isEvent = eventsDate.find(eventDate => isSameDate(eventDate, date))

      return isEvent || isMarkedDay ? "enabled" : "disabled"
    } else {
      return null
    }
  }
}

type CalendarProps = {
  date: Date
  setDate: () => void
  markedDays?: Array<number>
  eventDays: Array<Date>
}

export const Calendar = ({ date, setDate, markedDays, eventDays }) => {
  const handleChangeDate = (date: Date) => {
    setDate(date)
  }

  return (
    <div className="w-full mx-auto text-sm text-white">
      <ReactCalendar
        onChange={handleChangeDate}
        value={date}
        tileClassName={markDays(markedDays, eventDays)}
      />
    </div>
  )
}

Calendar.defaultProps = {
  events: [],
  markedDays: [],
  eventDays: [],
}
