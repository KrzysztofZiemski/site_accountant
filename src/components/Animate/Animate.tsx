import React from "react"
import { useSpring, animated } from "react-spring"

export enum typeAnimation {
  slideLeft = "slideLeft",
  slideRight = "slideRight",
  slideDown = "slideDown",
  slideUp = "slideUp",
}

type AnimateProps = {
  children: any
  type: typeAnimation
}
const animationOptions = {
  slideLeft: {
    transform: "translateX(0px)",
    from: { transform: "translateX(200%)" },
  },
  slideRight: {
    transform: "translateX(0px)",
    from: { transform: "translateX(-200%)" },
  },
  slideDown: {
    transform: "translateY(0px)",
    from: { transform: "translateY(-200px)" },
  },
  slideUp: {
    transform: "translateY(0px)",
    from: { transform: "translateY(200px)" },
  },
}

export const Animate = ({ children, type }: AnimateProps) => {
  const props = useSpring(animationOptions[type])
  return <animated.div style={props}>{children}</animated.div>
}

Animate.defaultProps = {
  type: typeAnimation.slideLeft,
}
