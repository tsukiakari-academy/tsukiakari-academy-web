import React from "react"

import { people, peopleSmall, facebook, youtube, twitter } from "@images"
import { SectionTitle } from "@components"

import "./about.scss"

const About = () => {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__content">
          <SectionTitle
            align="left"
            title="Who are we?"
            description="Eh? you guys really want to know?"
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

      <div className="home-about__image">
        <img src={people} className="d-none d-lg-block" alt="People" />
        <img src={peopleSmall} className="d-lg-none" alt="People" />
      </div>
    </section>
  )
}

export default About
