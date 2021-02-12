import React, { useState, useEffect } from "react"
import ReactCalendar from "react-calendar"
import "./Calendar.css"
import { colors } from "../../styles/colors"

const renderDays = (days: Array<number>) => {
  //customizacja inlinowych styli komponentu
  setTimeout(() => {
    const allButtonsDays = Array.from(
      document.getElementsByClassName(
        "react-calendar__tile"
      ) as HTMLCollectionOf<HTMLElement>
    )
    if (allButtonsDays.length < 20) return

    days.forEach((numberOfDay: number, index: number) => {
      if (allButtonsDays.length < index + 1) return
      setTimeout(() => {
        allButtonsDays[numberOfDay - 1].style.borderRadius = `50%`
        allButtonsDays[numberOfDay - 1].style.border = "2px solid #FFC700"
      }, index * 400)
    })
  }, 200)
}

type CalendarProps = {
  date: Date
  setDate: () => void
  markedDays?: Array<number>
}

export const Calendar = ({ date, setDate, markedDays }) => {
  const handleChangeDate = (date: Date) => {
    renderDays(markedDays)
    setDate(date)
  }

  useEffect(() => {
    renderDays(markedDays)
  }, [])

  return (
    <div className="w-full mx-auto text-sm text-white">
      <ReactCalendar
        onChange={handleChangeDate}
        value={date}
        showNavigation={false}
      />
    </div>
  )
}

Calendar.defaultProps = {
  events: [],
  markedDays: [],
}
