import React, { useEffect, useRef } from "react"

import { Accordion, SectionTitle } from "@components"

import "./faqs.scss"

const faqs = require("./faqs-data.json")

const Faqs = ({ setNavigation }) => {
  const faqRef = useRef()

  useEffect(() => {
    setNavigation({ faqs: faqRef })
  }, [setNavigation])

  return (
    <section ref={faqRef} className="faqs">
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

        <Accordion data={faqs} extraClass="faqs__wrapper" />
      </div>
    </section>
  )
}

export default Faqs
