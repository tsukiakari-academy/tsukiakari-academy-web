import React from "react"

import { generateClassNames } from "@utils/class-name-generator"

import "./text-field.scss"

export const TextField = (props) => {
  const {
    type = "input",
    placeholder = "",
    value,
    onChange,
    isRequired = false,
    extraClass,
    inputExtraClass
  } = props

  const DEFAULT_INPUT_PROPS = {
    placeholder: placeholder,
    value: value,
    required: isRequired,
    onChange: (event) => onChange(event.target.value)
  }

  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          className={generateClassNames("text-field__input textarea", [inputExtraClass])}
          {...DEFAULT_INPUT_PROPS}
        />
      )
    }

    return (
      <input
        type={type}
      className={generateClassNames("text-field__input", [inputExtraClass])}
        {...DEFAULT_INPUT_PROPS}
      />
    )
  }

  return (
    <div className={generateClassNames("text-field", [extraClass])}>
      {renderInput()}
    </div>
  )
}
