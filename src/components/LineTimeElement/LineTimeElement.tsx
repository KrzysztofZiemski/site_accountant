import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"

interface LineTimeElement {
  children: React.ReactNode | React.ReactPortal | React.ReactChild
  className?: string
  style?: React.CSSProperties
}
export const LineTimeElement = ({ children, ...props }: LineTimeElement) => {
  return (
    <VerticalTimelineElement>
      <p {...props}>{children}</p>
    </VerticalTimelineElement>
  )
}
