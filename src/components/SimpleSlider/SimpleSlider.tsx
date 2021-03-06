import React, { useRef } from "react"
import Slider from "react-slick"

import "./SimpleSlider.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="slick-prev slick-arrow"
    // className={
    //   "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    // }
    // aria-hidden="true"
    // aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    Previous
  </button>
)

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className="slick-next slick-arrow"
    // className={
    //   "slick-next slick-arrow" +
    //   (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    // }
    // aria-hidden="true"
    // aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    Next
  </button>
)

interface SimpleSliderProps {
  countShow: number
}

export const SimpleSlider = ({ children, countShow }) => {
  const refSlider = useRef()
  //@ts-ignore
  const next = () => refSlider.current.slickNext()
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    className: "slides",
    //@ts-ignore
    nextArrow: <SlickArrowRight />,
    //@ts-ignore
    prevArrow: <SlickArrowLeft />,
  }
  return (
    <div>
      <h2> Single Item</h2>

      <Slider ref={c => (refSlider.current = c)} {...settings}>
        {children}
      </Slider>
    </div>
  )
}

SimpleSlider.defaultProps = {
  countShow: 1,
}
