import React from "react"
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { teamImages } from "@images"
import { SectionTitle, SliderNavigation } from "@components"

import "./teams.scss"

const Teams = () => {
  SwiperCore.use([Navigation])

  const SWIPER_PROPS = {
    navigation: {
      prevEl: ".teams__navigation .slider-navigation__prev",
      nextEl: ".teams__navigation .slider-navigation__next"
    },
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 15,
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
        <SectionTitle
          title="Meet The Teams"
          description="Meet the people behind the scenes - say hello."
          extraClass="teams__section-title"
        />

        <div className="teams__slider">
          <Swiper {...SWIPER_PROPS}>
            {teamImages.map((image, index) => (
              <SwiperSlide key={index} className="teams__slide">
                <div className="teams__image-wrapper">
                  <img src={image} className="teams__image" alt="Team Member" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <SliderNavigation darkNavigation className="teams__navigation" />
      </div>
    </section>
  )
}

export default Teams
