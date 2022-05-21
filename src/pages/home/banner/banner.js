import React from "react"

import { logoBanner, caretDown } from "@images"

import "./banner.scss"

export const Banner = () => {
    return (
        <div className="banner">
          <div className="banner__content">
            <div className="banner__logo-wrapper">
              <img src={logoBanner} alt="banner logo" className="banner__logo"/>
            </div>
            <button className="btn-banner">
              Take a Tour
            </button>
          </div>
          <div className="banner__direction">
            <p className="text">Scroll Down</p>
            <div className="caret-circle">
              <img src={caretDown} alt="caret down" className="caret-down"/>
            </div>
          </div>
        </div>
    )
}
