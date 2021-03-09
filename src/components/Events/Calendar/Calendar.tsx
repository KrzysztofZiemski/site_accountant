import React, { useState, useEffect } from "react"
import ReactCalendar, { OnChangeDateCallback } from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { isSameDate } from "../../../helpers/date"

const markDays = (
  eventsDayEveryMonth: Array<number>,
  eventsDate: Array<Date>
) => {
  return ({ activeStartDate, date, view }) => {
    const day = date.getDate()
    if (view === "month") {
      const isMarkedDay = eventsDayEveryMonth.find(
        markedDayNumber => markedDayNumber === day
      )
        ? true
        : false

      // const isEvent = eventsDate.find(eventDate => isSameDate(eventDate, date))
      const isEvent = false
      return isEvent || isMarkedDay ? "ring-1 m-1" : ""
    } else {
      return null
    }
  }
}

type CalendarProps = {
  date: Date
  setDate: () => void
  markedDaysOfMonth: Array<number>
  markedDate: Array<Date>
  className?: string
}

export const Calendar = ({
  date,
  setDate,
  markedDaysOfMonth,
  markedDate,
  className,
}) => {
  const handleChangeDate = (date: Date | Date[]) => {
    if (!Array.isArray(date)) {
      setDate(date)
    }
  }

  return (
    <ReactCalendar
      className={`p-2 w-96 ${className}`}
      onChange={handleChangeDate}
      value={date}
      tileClassName={markDays(markedDaysOfMonth, markedDate)}
      onDrillUp={() => console.log("click")}
    />
  )
}

Calendar.defaultProps = {
  events: [],
  markedDays: [],
  eventDays: [],
  className: "",
}
