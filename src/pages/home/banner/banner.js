import React from "react"

import { logoFull, arrow } from "@images"

import "./banner.scss"

const Banner = () => {
    return (
        <div className="banner">
          <div className="banner__content">
            <div className="banner__logo-wrapper">
              <img src={logoFull} alt="banner logo" className="banner__logo"/>
            </div>
            <button className="banner__btn-banner">
              Take a Tour
            </button>
          </div>
          <div className="banner__direction">
            <p className="banner__text">Scroll Down</p>
            <div className="banner__caret-circle">
              <img src={arrow} alt="caret down" className="banner__caret-down"/>
            </div>
          </div>
        </div>
    )
}

export default Banner
