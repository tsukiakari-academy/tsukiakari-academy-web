import React from "react"

import { generateClassNames } from "@utils/class-name-generator"

import "./banner-section.scss"

export const BannerSection = (props) => {
  const {
    title,
    desc,
    children,
    extraClass
  } = props

  return (
    <section className={generateClassNames("banner-section", [extraClass])}>
      <div className="container">
        {children || (
          <div className="banner-section__content">
            <h2 className="banner-section__title">{title}</h2>
            <p className="banner-section__desc">{desc}</p>
          </div>
        )}
      </div>
    </section>
  )
}
