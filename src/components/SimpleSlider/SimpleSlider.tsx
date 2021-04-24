import React, {
  useEffect,
  useState,
  useRef,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react"

import Slider from "react-slick"
//@ts-ignore
import RightArrowIcon from "../../assets/right-arrow.svg"
//@ts-ignore
import LeftArrowIcon from "../../assets/left-arrow.svg"

import "./SimpleSlider.css"

interface SimpleSliderProps {
  children: ReactChild | ReactFragment | ReactPortal
  countShow: number
  className: string
  settings?: any
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

export const SimpleSlider = ({
  children,
  countShow,
  className,
  settings,
}: SimpleSliderProps) => {
  const refSlider = useRef<Slider | undefined>()
  const [numberSlideToshow, setNumberSlideToshow] = useState(1)
  const [isRendered, setIsRendered] = useState(false)
  const refCount = useRef(0)
  //@ts-ignore
  const next = () => refSlider.current.slickNext()

  const checkNumberSlideToShow = () => {
    if (windowMoreThan(768) && numberSlideToshow !== 2) {
      // setNumberSlideToshow(2)
    } else if (!windowMoreThan(768) && numberSlideToshow !== 1) {
      setNumberSlideToshow(1)
    }
  }

  let countChildren = 0

  useEffect(() => {
    React.Children.forEach(children, () => {
      refCount.current++
    })
  })

  useEffect(() => {
    setIsRendered(true)
  }, [])

  const defaultSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: refCount.current > 1 ? 2 : 1,
    slidesToScroll: refCount.current > 1 ? 2 : 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    //@ts-ignore
    // nextArrow: <NextButton />,
    // //@ts-ignore
    // prevArrow: <PreviousButton />,
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
          slidesToShow: refCount.current > 1 ? 2 : 1,
          slidesToScroll: refCount.current > 1 ? 2 : 1,
        },
      },
    ],
  }
  const comineSetting = { ...defaultSettings, ...settings }

  if (!isRendered) {
    return <div></div>
  } else {
    return (
      <Slider
        ref={c => (refSlider.current = c)}
        className={`w-10/12 md:w-11/12 m-auto ${className}`}
        {...comineSetting}
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
