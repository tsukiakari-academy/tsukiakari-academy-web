import React from "react"

import { people } from "@images"
import { BannerSection, SectionTitle } from "@components"

import "./registration-banner.scss"

const RegistrationBanner = () => {
  return (
    <BannerSection extraClass="registration-banner">
      <div className="registration-banner__wrapper">
        <div className="registration-banner__content">
          <SectionTitle
            align="left"
            title="#OPENAUDITION"
            extraClass="registration-banner__title"
          />
          <p className="registration-banner__desc">
            The VTuber team "Tsukiakari Academy" is currently holding auditions for those
            who have content creation experience and would like to challenge themselves
            as a VTuber by providing the basis for an original character to support their
            VTuber activities.
          </p>
        </div>

        <div className="registration-banner__image-wrapper">
          <img
            src={people}
            alt="Registration Banner Image"
            className="registration-banner__image"
          />
        </div>
      </div>
    </BannerSection>
  )
}

export default RegistrationBanner
