import React from "react"

import { generateClassNames } from "@utils/class-name-generator"

import "./section-pagination.scss"

export const SectionPagination = (prop) => {
  const {
    total = 2,
    totalActive = 1,
    sliderPagination = false,
    darkActive = false,
    className
  } = prop

  const indicators = [...Array(total).keys()]

  return (
    <div
      className={generateClassNames(
        'section-pagination', [
          sliderPagination && 'slider-pagination',
          darkActive && 'dark',
          className
        ]
      )}
    >
      {indicators.map((_, index) => (
        <span
          key={index}
          className={generateClassNames(
            '', [index < totalActive && 'active']
          )}
        />
      ))}
    </div>
  )
}
