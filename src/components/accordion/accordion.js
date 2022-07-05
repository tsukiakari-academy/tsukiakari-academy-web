import React, { useEffect, useRef, useState } from "react"

import { generateClassNames } from "@utils/class-name-generator"

import "./accordion.scss"

export const Accordion = ({ data, extraClass }) => {
  const accordion = useRef(null)

  const [activeIndex, setActiveIndex] = useState(null)
  const [contentsHeight, setContentsHeight] = useState([])

  const getContentHeight = (index) => {
    if (activeIndex === null) return contentsHeight[index]

    return activeIndex === index ? contentsHeight[index] : 0
  }

  const getAdditionalHeight = () => {
    if (window.innerWidth > 992) return 60

    return 40
  }

  useEffect(() => {
    if (!accordion.current) return

    const elsHeight = []
    const descriptions = accordion.current.querySelectorAll('.accordion__item-description')

    descriptions.forEach(description => {
      elsHeight.push(description.clientHeight + getAdditionalHeight())
    })

    setContentsHeight(elsHeight)
    setActiveIndex(0)
  }, [])

  if (!data.length) return null

  return (
    <div
      ref={accordion}
      className={generateClassNames("accordion", [extraClass])}
    >
      {data.map(({ title, description }, index) => (
        <button
          key={index}
          className={
            generateClassNames(
              "accordion__item",
              [activeIndex === index && "active"]
            )
          }
          onClick={() => setActiveIndex(index)}
        >
          <div className="accordion__item-title">{title}</div>
          <div
            className="accordion__item-description"
            style={{
              maxHeight: getContentHeight(index),
              minHeight: getContentHeight(index)
            }}
          >
            {description}
          </div>
        </button>
      ))}
    </div>
  )
}
