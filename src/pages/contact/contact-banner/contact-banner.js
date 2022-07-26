import React from "react"

import { BannerSection } from "@components"

import "./contact-banner.scss"

const ContactBanner = () => {
  return (
    <BannerSection
      title="How Can We Help You?"
      desc="We would love to hear from you."
      extraClass="contact-banner"
    />
  )
}

export default ContactBanner
