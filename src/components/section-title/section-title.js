import React from "react"

import { generateClassNames } from "@utils"

import "./section-title.scss"

export const SectionTitle = ({ align, size, title, subTitle, extraClass }) => {
  return (
    <h2 className={generateClassNames("section-title", [align, size, extraClass])}>
      {title}
      <span className="section-title__sub-title">{subTitle}</span>
    </h2>
  )
}
