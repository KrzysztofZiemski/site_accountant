import React from "react"

type DashboardEventsProps = {
  className: string
  children?: React.ReactNode
}

export const DashboardEvents = ({
  className,
  children,
}: DashboardEventsProps) => {
  return (
    <div className={`${className}`}>
      <div
        className="w-full bg-white-opacity py-2 text-justify overflow-auto rounded-lg ring-2 md:p-0"
        // style={{ backgroundColor: "#e3e4e3" }}
      >
        <div className="shadow p-3 h-full overflow-auto">{children}</div>
      </div>
    </div>
  )
}
