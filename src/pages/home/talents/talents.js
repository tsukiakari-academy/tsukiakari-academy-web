import React, { useRef, useState } from "react"
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { talentImages } from "@images"
import { SectionTitle, SliderNavigation } from "@components"

import "./talents.scss"

const talents = require("./talents-data.json")

const TalensSection = React.forwardRef((props, ref) => {
  return (
    <section className="talents" ref={ref}>
      {props.children}
    </section>
  );
});

const Talents = ({refProp}) => {
  const contentEl = useRef()
  const titleEl = useRef()
  const bioEl = useRef()

  const [displayName, setDisplayName] = useState("")
  const [displayBio, setDisplayBio] = useState("")
  const [activeSlide, setActiveSlide] = useState(0)

  const onSlideChangeStart = () => {
    if (window.innerWidth > 991) {
      titleEl.current.classList.add("transition")
      bioEl.current.classList.add("transition")

      return
    }

    contentEl.current.classList.add("transition")
  }

  const onSlideChangeEnd = () => {
    if (window.innerWidth > 991) {
      titleEl.current.classList.remove("transition")
      bioEl.current.classList.remove("transition")

      return
    }

    contentEl.current.classList.remove("transition")
  }

  SwiperCore.use([Autoplay, Navigation, EffectFade])

  const SWIPER_PROPS = {
    onAfterInit: () => {
      setDisplayName(talents[0].name)
      setDisplayBio(talents[0].biography)
    },
    onSlideChangeTransitionStart: ({ realIndex }) => {
      if (!contentEl.current) return

      setActiveSlide(realIndex)
      onSlideChangeStart()
    },
    onSlideChangeTransitionEnd: swiper => {
      if (!contentEl.current) return

      setDisplayName(talents[swiper.realIndex].name)
      setDisplayBio(talents[swiper.realIndex].biography)

      onSlideChangeEnd()
    },
    navigation: {
      prevEl: ".talents__navigation .slider-navigation__prev",
      nextEl: ".talents__navigation .slider-navigation__next"
    },
    effect: "fade",
    speed: 900,
    allowTouchMove: false,
    loop: true
  }

  const renderSectionNumber = () => {
    if (activeSlide + 1 < 10) return `0${activeSlide + 1}`

    return activeSlide + 1
  }

  const renderContentDetails = () => (
    <div className="talents__content" ref={contentEl}>
      <div className="talents__title-wrapper" ref={titleEl}>
        <p className="talents__title">{displayName}</p>
      </div>
      <p className="talents__biography" ref={bioEl}>{displayBio}</p>
      <SliderNavigation className="talents__navigation d-none d-lg-flex" />
    </div>
  )

  return (
    <TalensSection ref={refProp}>
      <div className="container">
        <SectionTitle
          title="Our Talents"
          description="Get to know our beloved talents"
          extraClass="talents__section-title"
        />

        <div className="talents__slider">
          <span className="talents__section-number">{renderSectionNumber()}</span>

          <SliderNavigation className="talents__navigation d-lg-none" />

          <Swiper {...SWIPER_PROPS}>
            {talents.map((talent, index) => (
              <SwiperSlide key={index}>
                <div className="talents__image-wrapper">
                  <img src={talentImages[index]} className="talents__image" alt={talent.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {renderContentDetails()}
        </div>
      </div>
    </TalensSection>
  )
}

export default Talents
