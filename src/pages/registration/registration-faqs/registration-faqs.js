import React from "react"

import { Accordion, SectionTitle } from "@components"

import "./registration-faqs.scss"

const registrationFaqs = require("./registration-faqs-data.json")

const RegistrationFaqs = () => {
  return (
    <section className="registration-faqs">
      <div className="container">
        <SectionTitle
          align="left"
          title="Frequently Asked Questions"
          description="Got confuse? maybe you can find your answer here."
          extraClass="d-none d-lg-flex"
        />

        <SectionTitle
          title="FAQ"
          description="Got confuse? maybe you can find your answer here."
          extraClass="d-lg-none"
        />

        <Accordion
          data={registrationFaqs}
          extraClass="registration-faqs__wrapper"
        />
      </div>
    </section>
  )
}

export default RegistrationFaqs
