import React from "react"

import { generateClassNames } from "@utils"

import "./section-title.scss"

export const SectionTitle = ({ align, title, titleDecoration, extraClass }) => {
  return (
    <h2 className={generateClassNames("section-title", [align, extraClass])}>
      {title}
      <img src={titleDecoration} className="section-title__sub-title" alt={title} />
    </h2>
  )
}
