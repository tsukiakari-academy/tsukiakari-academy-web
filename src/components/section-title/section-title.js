import React from "react"

import { generateClassNames } from "@utils"

import "./section-title.scss"

export const SectionTitle = ({ align, title, description, extraClass }) => {
  return (
    <div className={generateClassNames("section-title", [align, extraClass])}>
      <h2 className="section-title__title">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  )
}
