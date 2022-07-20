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
      <div className="footer__main">
        <div className="container">
          <div className="footer__logo">
            <img src={logoFull} alt="Footer Logo" />
          </div>

          <div className="footer__side-section">
            <div className="footer__section-wrapper">
              <p className="footer__section-title">Social Media</p>

              <ul className="footer__section">
                <li className="footer__item">
                  <a href="https://www.facebook.com/TsukiakariAC" target="_blank" rel="noopener noreferrer">Facebook</a>
                </li>
                <li className="footer__item">
                  <a href="https://www.instagram.com/tsukiakariac/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li className="footer__item">
                  <a href="https://twitter.com/TsukiakariAC" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
                <li className="footer__item">
                  <a href="https://www.youtube.com/watch?v=yqWX86uT5jM" target="_blank" rel="noopener noreferrer">Youtube</a>
                </li>
              </ul>
            </div>

            <div className="footer__section-wrapper">
              <p className="footer__section-title">Contact us</p>

              <div className="footer__section">
                <a href="mailto:staff@tsukiakariacademy.com" className="footer__contact-email">staff@tsukiakariacademy.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__sub">
        <div className="container">
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
