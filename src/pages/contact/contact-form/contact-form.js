import React, { useState } from "react"

import { TextField } from "@components"

import "./contact-form.scss"

const ContactForm = () => {
  const [aboutTalent, setAboutTalent] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  const onSubmit = () => {
    console.log('Submitted')
  }

  return (
    <section className="contact-form">
      <div className="container">
        <h3 className="contact-form__title">
          Please submit your details,
          we will reach out to you quickly.
        </h3>

        <form className="contact-form__input-area">
          <TextField
            type="textarea"
            value={aboutTalent}
            placeholder="Tell us about yourself"
            onChange={(value) => setAboutTalent(value)}
            extraClass="contact-form__input-wrapper"
            isRequired={true}
          />
          <TextField
            value={firstName}
            placeholder="First Name"
            onChange={(value) => setFirstName(value)}
            extraClass="contact-form__input-wrapper"
            isRequired={true}
          />
          <TextField
            value={lastName}
            placeholder="Last Name"
            onChange={(value) => setLastName(value)}
            extraClass="contact-form__input-wrapper"
            isRequired={true}
          />
          <TextField
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(value) => setEmail(value)}
            extraClass="contact-form__input-wrapper"
            isRequired={true}
          />

          <button
            type="submit"
            onClick={onSubmit}
            className="contact-form__submit"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
