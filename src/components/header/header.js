import React, { useEffect, useRef } from "react"

import { logo } from "@images"

import "./header.scss"

export const Header = ({ color, navigation }) => {
  const headerEl = useRef()
  const mobileBtnEl = useRef()

  const onMenuClick = (menuParam) => {
    Object.keys(navigation).forEach((menu, index) => {
      if (menu === menuParam) {
        Object.values(navigation)[index]
          .current
          .scrollIntoView({behavior: 'smooth'})
      }
    })
  }

  const pageScrollHandler = () => {
    if (window.scrollY > 10) return headerEl.current.classList.add('scrolled')

    headerEl.current.classList.remove('scrolled')
  }

  const mobileButtonClickHandler = () => {
    if (window.innerWidth > 767) return

    mobileBtnEl.current.addEventListener('click', () => {
      mobileBtnEl.current.classList.toggle('active')
    })
  }

  const resetElementsClasses = () => {
    mobileBtnEl.current.classList.remove('active')
  }

  useEffect(() => {
    mobileButtonClickHandler()

    window.addEventListener("scroll", pageScrollHandler)
    window.addEventListener("resize", resetElementsClasses)

    return () => {
      window.removeEventListener("scroll", pageScrollHandler)
      window.removeEventListener("resize", resetElementsClasses)
    }
  }, [])

  return (
    <header className="header" ref={headerEl}>
      <div className="container">
        <div className="header__top-decoration" style={{ backgroundColor: color  }}></div>

        <div className="header__main-wrapper">
          <h1 className="header__logo-wrapper">
            <a href="/" className="header__logo">
              <img src={logo} alt="Logo" />
            </a>
          </h1>

          <nav className="header__navbar">
            <ul className="header__navbar-wrapper">
              <li className="header__navbar-list">
                <button
                  className="header__navbar-item"
                  onClick={() => onMenuClick('faqs')}
                >
                  FAQ
                </button>
              </li>
              <li className="header__navbar-list">
                <button
                  className="header__navbar-item"
                  onClick={() => onMenuClick('talents')}
                >
                  Talents
                </button>
              </li>
              <li className="header__navbar-list">
                <button
                  className="header__navbar-item"
                  onClick={() => onMenuClick('about')}
                >
                  About Us
                </button>
              </li>
            </ul>
            <button onClick={() => window.location.href='https://bit.ly/TsukiakariApplicationForm'} className="header__navbar-cta">Join Us</button>
          </nav>
        </div>

        <button className="header__mobile-button" ref={mobileBtnEl}>
          <div>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  )
}
