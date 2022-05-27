import React from "react"

import { generateClassNames } from "@utils/class-name-generator"

import "./slider-navigation.scss"

export const SliderNavigation = (prop) => {
  const { darkNavigation, className } = prop

  return (
    <div
      className={generateClassNames(
        'slider-navigation', [
          darkNavigation && 'dark',
          className
        ]
      )}
    >
      <div className="slider-navigation__prev"></div>
      <div className="slider-navigation__next"></div>
    </div>
  )
}
