import React, { useEffect, useState, useRef } from "react"
import Slider from "react-slick"
//@ts-ignore
import RightArrowIcon from "../../assets/right-arrow.svg"
//@ts-ignore
import LeftArrowIcon from "../../assets/left-arrow.svg"

import "./SimpleSlider.css"

interface SimpleSliderProps {
  countShow: number
  className: string
}
const windowMoreThan = (value: number) => {
  return value <= window.innerWidth
}

const NextButton = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button {...props}>
      <RightArrowIcon />
    </button>
  )
}
const PreviousButton = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button {...props}>
      <LeftArrowIcon />
    </button>
  )
}

export const SimpleSlider = ({ children, countShow, className }) => {
  const refSlider = useRef()
  const [numberSlideToshow, setNumberSlideToshow] = useState(1)
  const [isRendered, setIsRendered] = useState(false)
  //@ts-ignore
  const next = () => refSlider.current.slickNext()

  const checkNumberSlideToShow = () => {
    if (windowMoreThan(768) && numberSlideToshow !== 2) {
      // setNumberSlideToshow(2)
    } else if (!windowMoreThan(768) && numberSlideToshow !== 1) {
      setNumberSlideToshow(1)
    }
  }

  useEffect(() => {
    setIsRendered(true)
  }, [])

  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: children.length > 1 ? 2 : 1,
    slidesToScroll: children.length > 1 ? 2 : 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    //@ts-ignore
    nextArrow: <NextButton />,
    //@ts-ignore
    prevArrow: <PreviousButton />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: children.length > 1 ? 2 : 1,
          slidesToScroll: children.length > 1 ? 2 : 1,
        },
      },
    ],
  }
  if (!isRendered) {
    return <div></div>
  } else {
    return (
      <Slider
        ref={c => (refSlider.current = c)}
        {...settings}
        className={`w-10/12 md:w-11/12 m-auto ${className}`}
      >
        {children}
      </Slider>
    )
  }
}

SimpleSlider.defaultProps = {
  countShow: 1,
  className: "",
}
