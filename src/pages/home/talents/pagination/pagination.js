import React from "react"

import { generateClassNames } from "@utils"

import "./pagination.scss"

const Pagination = ({ total, active, extraClass }) => {
  const indicators = [...Array(total).keys()]

  return (
    <div className="pagination">
      {indicators.map((_, index) => (
        <span
          key={index}
          className={
            generateClassNames(
              "", [
                index < active && "active",
                extraClass
              ]
            )}
        />
      ))}
    </div>
  )
}

export default Pagination
