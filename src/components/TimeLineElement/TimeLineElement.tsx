import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { colors } from "../../styles/colors"

interface TimeLineElement {
  children: React.ReactNode | React.ReactPortal | React.ReactChild
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactChild
  iconStyle?: React.CSSProperties
}

const defaultStyleIcon = { background: colors.secondaryColor, color: "#fff" }
export const TimeLineElement = ({
  children,
  icon,
  iconStyle,
  ...props
}: TimeLineElement) => {
  return (
    <VerticalTimelineElement
      icon={icon || null}
      iconStyle={iconStyle || defaultStyleIcon}
    >
      <div {...props}>{children}</div>
    </VerticalTimelineElement>
  )
}
