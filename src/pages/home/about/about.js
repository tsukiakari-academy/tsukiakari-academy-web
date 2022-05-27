import React from "react"

import { about, people, facebook, youtube, twitter } from "@images"
import { SectionTitle, SectionPagination } from "@components"

import "./about.scss"

const About = () => {
  return (
    <section className="home-about">
      <div className="home-about__image">
        <img src={people} alt="People" />
      </div>

      <div className="container">
        <SectionPagination />

        <div className="home-about__content">
          <SectionTitle
            align="left"
            size="big"
            title="Who are we?"
            titleDecoration={about}
            extraClass="home-about__section-title"
          />

          <p className="home-about__description">
            Tsukiakari Academy are a VTuber Team based on Academia theme<br />
            We are a group of people who have one goal which is to help others VTubers
            Our Academy will always welcome every student that want to join us!~
          </p>

          <div className="home-about__socmed">
            <p className="home-about__socmed-title">Follow us on</p>

            <a href="https://www.youtube.com/" className="home-about__socmed-image" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Youtube" />
            </a>
            <a href="https://www.twitter.com/" className="home-about__socmed-image" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/" className="home-about__socmed-image" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
