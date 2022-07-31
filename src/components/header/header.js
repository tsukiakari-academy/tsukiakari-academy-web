import React, { useEffect, useRef } from "react"
import { navigate } from "gatsby"

import { logo } from "@images"

import "./header.scss"

const headerMenu = require("./header-menu.json")

export const Header = ({ color, withoutMenu }) => {
  const headerEl = useRef()
  const navEl = useRef()
  const mobileBtnEl = useRef()

  const scrollToSection = (sectionName) => {
    const section = document.querySelector(sectionName)
      section.scrollIntoView({behavior: 'smooth'})
  }

  const onMenuClick = (sectionName) => {
    if (window.innerWidth < 992) {
      resetElementsClasses()
    }

    if (sectionName.includes('#')) {
      if (window.location.pathname === '/') {
        scrollToSection(sectionName)

        return
      }

      navigate('/')

      setTimeout(() => {
        scrollToSection(sectionName)
      }, 300)

      return
    }

    navigate(sectionName)
  }

  const pageScrollHandler = () => {
    if (window.scrollY > 10) return headerEl.current.classList.add('scrolled')

    headerEl.current.classList.remove('scrolled')
  }

  const mobileButtonClickHandler = () => {
    if (window.innerWidth > 991 || withoutMenu) return

    mobileBtnEl.current.addEventListener('click', () => {
      mobileBtnEl.current.classList.toggle('active')
      navEl.current.classList.toggle('open')
      document.querySelector('body').classList.toggle('overflow-hidden')
    })
  }

  const resetElementsClasses = () => {
    if (withoutMenu) return

    mobileBtnEl.current.classList.remove('active')
    navEl.current.classList.remove('open')
    document.querySelector('body').classList.remove('overflow-hidden')
  }

  const renderLogo = () => (
    <h1 className="header__logo-wrapper">
      <a href="/" className="header__logo">
        <img src={logo} alt="Logo" />
      </a>
    </h1>
  )

  const renderMenuNav = () => (
    <>
      <ul className="header__navbar-wrapper">
        {headerMenu.map(({ text, section }, index) => (
          <li key={index} className="header__navbar-list">
            <button
              className="header__navbar-item"
              onClick={() => onMenuClick(section)}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => window.location.href='https://bit.ly/TsukiakariApplicationForm'} className="header__navbar-cta">Join Us</button>
    </>
  )

  const renderNavigation = (isMobile = false) => {
    if (withoutMenu) return null

    return (
      <nav ref={navEl} className="header__navbar">
        {isMobile ? (
          <div className="container">
            {renderMenuNav()}
            <div className="header__additional-menu">
              <p className="header__additional-title">Contact us</p>

              <div className="header__additional">
                <a href="mailto:staff@tsukiakariacademy.com" className="header__contact-email">staff@tsukiakariacademy.com</a>
              </div>
            </div>
            <div className="header__additional-menu">
              <p className="header__additional-title">Social Media</p>

              <ul className="header__additional">
                <li className="header__additional-item">
                  <a href="https://www.facebook.com/TsukiakariAC" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
                <li className="header__additional-item">
                  <a href="https://www.instagram.com/tsukiakariac/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li className="header__additional-item">
                  <a href="https://twitter.com/TsukiakariAC" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
                <li className="header__additional-item">
                  <a href="https://www.youtube.com/watch?v=yqWX86uT5jM" target="_blank" rel="noopener noreferrer">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          renderMenuNav()
        )}
      </nav>
    )
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

        <div className="header__desktop">
          {renderLogo()}
          {renderNavigation()}
        </div>

        <div className="header__mobile d-lg-none">
          {renderLogo()}
          {renderNavigation(true)}
        </div>

        {!withoutMenu && (
          <button className="header__mobile-button" ref={mobileBtnEl}>
            <div>
              <span></span>
              <span></span>
            </div>
          </button>
        )}
      </div>
    </header>
  )
}
