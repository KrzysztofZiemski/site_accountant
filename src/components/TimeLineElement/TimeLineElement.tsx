import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"

interface TimeLineElement {
  children: React.ReactNode | React.ReactPortal | React.ReactChild
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactChild
  iconStyle?: React.CSSProperties
}

const defaultStyleIcon = { background: "rgb(33, 150, 243)", color: "#fff" }
export const TimeLineElement = ({
  children,
  icon,
  iconStyle,
  ...props
}: TimeLineElement) => {
  console.log(icon)
  return (
    <VerticalTimelineElement
      icon={icon || null}
      iconStyle={iconStyle || defaultStyleIcon}
    >
      <p {...props}>{children}</p>
    </VerticalTimelineElement>
  )
}
