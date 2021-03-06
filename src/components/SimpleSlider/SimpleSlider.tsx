import React, { useEffect, useState, useRef } from "react"
import Slider from "react-slick"
//@ts-ignore
import RightArrowIcon from "../../assets/right-arrow.svg"
//@ts-ignore
import LeftArrowIcon from "../../assets/left-arrow.svg"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
  //@ts-ignore
  const next = () => refSlider.current.slickNext()

  const checkNumberSlideToShow = () => {
    if (windowMoreThan(768) && numberSlideToshow !== 2) {
      setNumberSlideToshow(2)
    } else if (!windowMoreThan(768) && numberSlideToshow !== 1) {
      setNumberSlideToshow(1)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", checkNumberSlideToShow)
    return () => window.removeEventListener("resize", checkNumberSlideToShow)
  }, [])

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numberSlideToshow,
    slidesToScroll: numberSlideToshow,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    //@ts-ignore
    nextArrow: <NextButton />,
    //@ts-ignore
    prevArrow: <PreviousButton />,
  }

  return (
    <Slider
      ref={c => (refSlider.current = c)}
      {...settings}
      className={className}
    >
      {children}
    </Slider>
  )
}

SimpleSlider.defaultProps = {
  countShow: 1,
  className: "",
}
