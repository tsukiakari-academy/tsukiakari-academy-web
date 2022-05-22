import React, { useRef, useState } from "react"
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { talents as talentsTitle, talentImages } from "@images"
import { SectionTitle } from "@components"
import Pagination from "./pagination/pagination"

import "./talents.scss"

const talents = require("./talents-data.json")

const Talents = () => {
  const titleEl = useRef()
  const bioEl = useRef()

  const [displayName, setDisplayName] = useState("")
  const [displayBio, setDisplayBio] = useState("")
  const [activeSlide, setActiveSlide] = useState(0)

  SwiperCore.use([Autoplay, Navigation, EffectFade])

  const SWIPER_PROPS = {
    onAfterInit: swiper => {
      setDisplayName(talents[0].name)
      setDisplayBio(talents[0].biography)
    },
    onSlideChangeTransitionStart: ({ realIndex }) => {
      if (!titleEl.current || !bioEl.current) return

      setActiveSlide(realIndex)
      titleEl.current.classList.add("transition")
      bioEl.current.classList.add("transition")
    },
    onSlideChangeTransitionEnd: swiper => {
      if (!titleEl.current || !bioEl.current) return

      setDisplayName(talents[swiper.realIndex].name)
      setDisplayBio(talents[swiper.realIndex].biography)

      titleEl.current.classList.remove("transition")
      bioEl.current.classList.remove("transition")
    },
    navigation: {
      prevEl: ".talents__navigation .previous",
      nextEl: ".talents__navigation .next"
    },
    effect: "fade",
    speed: 900,
    allowTouchMove: false,
    loop: true
  }

  const renderContentDetails = () => (
    <div className="talents__content">
      <div className="talents__title-wrapper" ref={titleEl}>
        <p className="talents__title">{displayName}</p>
        <p className="talents__sub-title">Biography</p>
      </div>
      <p className="talents__biography" ref={bioEl}>{displayBio}</p>
      <div className="talents__navigation">
        <div className="previous"></div>
        <div className="next"></div>
      </div>
    </div>
  )

  return (
    <section className="talents">
      <div className="container">
        <Pagination total={talents.length} active={activeSlide + 1} />
        <SectionTitle
          align="center"
          title="Our Talents"
          titleDecoration={talentsTitle}
          extraClass="talents__section-title"
        />
        <span className="talents__section-number">02</span>

        <div className="talents__slider">
          {renderContentDetails()}

          <Swiper {...SWIPER_PROPS}>
            {talents.map((talent, index) => (
              <SwiperSlide key={index}>
                <div className="talents__image-wrapper">
                  <img src={talentImages[index]} className="talents__image" alt={talent.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Talents
