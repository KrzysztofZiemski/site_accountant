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
      <div className="w-full h-48 md:h-96 py-2 md:p-0 text-justify overflow-auto">
        <div className="shadow p-3 h-full bg-white rounded-lg overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
