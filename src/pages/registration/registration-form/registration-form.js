import React, { useState } from "react"

import { SectionTitle, TextField } from "@components"

import "./registration-form.scss"

const RegistrationForm = () => {
  const [aboutTalent, setAboutTalent] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    console.log('Submitted')
  }

  return (
    <section className="registration-form">
      <div className="container">
        <form className="registration-form__input-area">
          <TextField
            type="textarea"
            value={aboutTalent}
            placeholder="Tell us about yourself"
            onChange={(value) => setAboutTalent(value)}
            extraClass="registration-form__input-wrapper"
            isRequired={true}
          />
          <TextField
            value={firstName}
            placeholder="First Name"
            onChange={(value) => setFirstName(value)}
            extraClass="registration-form__input-wrapper"
            isRequired={true}
          />
          <TextField
            value={lastName}
            placeholder="Last Name"
            onChange={(value) => setLastName(value)}
            extraClass="registration-form__input-wrapper"
            isRequired={true}
          />
          <TextField
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(value) => setEmail(value)}
            extraClass="registration-form__input-wrapper"
            isRequired={true}
          />

          <button
            type="submit"
            onClick={onSubmit}
            className="registration-form__submit"
          >
            Continue
          </button>
        </form>
        <div className="registration-form__schedule">
          <SectionTitle
            align="left"
            title="Schedule"
            extraClass="registration-form__section-title"
          />

          <ul className="registration-form__schedule-wrapper">
            <li className="registration-form__schedule-item">
              <span />
              Fill in personal data
            </li>
            <li className="registration-form__schedule-item">
              <span />
              Screening
            </li>
            <li className="registration-form__schedule-item">
              <span />
              Interview
            </li>
            <li className="registration-form__schedule-item">
              <span />
              Confirmation
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm
