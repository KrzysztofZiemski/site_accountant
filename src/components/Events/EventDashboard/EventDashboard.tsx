import React, { useRef } from "react"
import { EventType } from "../Events"
import ReactMarkdown from "react-markdown"

import "./EventDashboard.css"

type EventDashboardProps = {
  events: Array<EventType>
  active: number
  className: string
}

export const EventDashboard = ({
  active,
  events,
  className,
}: EventDashboardProps) => {
  let prevActive = useRef({})

  const render = () => {
    const listToRender = events.map(
      ({ description, dayOfTheMonth }: EventType) => {
        return (
          <div
            key={dayOfTheMonth}
            className={`markdown-container absolute w-full h-full top-0 left-0 overflow-y-auto transform ${
              dayOfTheMonth === active
                ? "animate-show"
                : dayOfTheMonth === prevActive.current
                ? "animate-hide"
                : "translate-x-full"
            }`}
          >
            <ReactMarkdown children={description} />
          </div>
        )
      }
    )

    prevActive.current = active

    return listToRender
  }

  return (
    <div className={`relative overflow-hidden h-64 ${className}`}>
      {render()}
    </div>
  )
}

EventDashboard.defaultProps = {
  className: "",
}
