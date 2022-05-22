import React, { useEffect, useState } from "react"

import { logoFull } from "@images"

import "./footer.scss"

export const Footer = () => {
  const [displayYear, setDisplayYear] = useState(0)

  useEffect(() => {
    const currentYear = new Date().getFullYear()

    setDisplayYear(currentYear)
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__main-section">
            <div className="footer__logo">
              <img src={logoFull} alt="Footer Logo" />
            </div>

            <p className="footer__description">
              We are Tsukiakari Academy, a VTuber Team based on Academia theme
              a group of people who have one goal which is to help others VTubers
            </p>

            <div className="footer__contact">
              <p className="footer__contact-title">Contact us</p>
              <span className="footer__contact-divider"></span>
              <a href="mailto:correctionisneeded@gmail.com" className="footer__contact-email">correctionisneeded@gmail.com</a>
            </div>
          </div>

          <ul className="footer__section">
            <li className="footer__item">
              <a href="/about">About Us</a>
            </li>
            <li className="footer__item">
              <a href="/faq">FAQ</a>
            </li>
            <li className="footer__item">
              <a href="/comics">Comics</a>
            </li>
            <li className="footer__item">
              <a href="/our-talents">Our Talents</a>
            </li>
            <li className="footer__item">
              <a href="/our-staff">Our Staff</a>
            </li>
          </ul>

          <ul className="footer__section">
            <p className="footer__section-title">Social Media</p>

            <li className="footer__item">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li className="footer__item">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li className="footer__item">
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li className="footer__item">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
            </li>
          </ul>
        </div>

        <div className="footer__sub">
          <p className="footer__sub-item">&copy; Copyright {displayYear} <span>Tsukiakari Academy</span></p>

          <div className="footer__sub-right">
            <p className="footer__sub-item"><span>Illustrator:</span> Bean</p>
            <p className="footer__sub-item"><span>UI Designer:</span> Maruje</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
