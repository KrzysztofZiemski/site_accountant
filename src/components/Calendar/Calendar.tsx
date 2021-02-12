import React, { useState, useEffect } from "react"
import ReactCalendar from "react-calendar"
import "./Calendar.css"
import { colors } from "../../styles/colors"

const numbers = [1, 5, 10]

const renderDays = () => {
  //customizacja inlinowych styli komponentu
  setTimeout(() => {
    const allButtonsDays = Array.from(
      document.getElementsByClassName(
        "react-calendar__tile"
      ) as HTMLCollectionOf<HTMLElement>
    )
    if (allButtonsDays.length < 20) return

    numbers.forEach((numberOfDay: number, index: number) => {
      setTimeout(() => {
        allButtonsDays[numberOfDay - 1].style.borderRadius = `50%`
        allButtonsDays[numberOfDay - 1].style.backgroundColor = "#03763a"
        allButtonsDays[numberOfDay - 1].style.color = "black"
      }, index * 400)
    })
  }, 200)
}

type CalendarProps = {
  date: Date
  setDate: () => void
  events: Array<Date>
}

export const Calendar = ({ date, setDate, events }) => {
  const handleChangeDate = (date: Date) => {
    renderDays()
    setDate(date)
  }

  useEffect(() => {
    renderDays()
  }, [])

  return (
    <div className="w-full max-w-sm mx-auto p-2 text-sm text-white">
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
}
