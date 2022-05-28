import React from "react"
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { teams as ourTeams, teamImages } from "@images"
import { SectionTitle, SectionPagination, SliderNavigation } from "@components"

import "./teams.scss"

const teams = require("./teams-data.json")

const Teams = () => {
  SwiperCore.use([Autoplay, Navigation, EffectFade])

  const SWIPER_PROPS = {
    navigation: {
      prevEl: ".teams__navigation .slider-navigation__prev",
      nextEl: ".teams__navigation .slider-navigation__next"
    },
    speed: 900,
    slidesPerView: 2,
    spaceBetween: 15,
    allowTouchMove: false,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  }

  return (
    <section className="teams">
      <div className="container">
        <SectionPagination darkActive />

        <SectionTitle
          title="Best Team Ever"
          titleDecoration={ourTeams}
          extraClass="teams__section-title"
        />

        <div className="teams__slider">
          <Swiper {...SWIPER_PROPS}>
            {teams.map((team, index) => (
              <SwiperSlide key={index} className="teams__slide">
                <div className="teams__image-wrapper">
                  <img src={teamImages[index]} className="teams__image" alt={team.name} />
                </div>
                <div className="teams__content">
                  <p className="teams__title">{team.name}</p>
                  <p className="teams__position">{team.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="teams__navigation-wrapper">
          <SliderNavigation darkNavigation className="teams__navigation" />

          <a href="/teams" className="teams__team-details">More Detail</a>
        </div>
      </div>
    </section>
  )
}

export default Teams
