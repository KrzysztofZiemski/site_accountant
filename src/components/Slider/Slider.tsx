import React from "react"

type SliderProps = {
  list: Array<any>
  activeIndex: number
  className: string
}

export const Slider = ({ activeIndex, list, className }: SliderProps) => {
  const renderList = () => {
    return list.map(element => {
      return (
        <div className="flex-shrink-0 w-full h-full p-3 text-justify overflow-auto">
          <div className="shadow p-3 h-full bg-white rounded-lg overflow-auto">
            {element}
          </div>
        </div>
      )
    })
  }

  return (
    <div className={`overflow-x-hidden w-full ${className}`}>
      <div
        className={`flex transition-all duration-500 h-full w-full`}
        style={{
          transform: `translateX(-${
            activeIndex === 0 ? "0" : activeIndex * 100
          }%)`,
        }}
      >
        {renderList()}
      </div>
    </div>
  )
}

Slider.defaultProps = {
  list: [],
  activeIndex: 0,
  className: "",
}
