import React from "react"

import "./collaboration.scss"

const Collaboration = () => {
  return (
    <section className="collaboration">
      <div className="container">
        <div className="collaboration__title-wrapper">
          <h2 className="collaboration__title">Open Audition</h2>
          <p className="collaboration__description">Are you interested in being part of our team? </p>
        </div>
        <div className="collaboration__button-wrapper">
          <button className="collaboration__button">Join Us</button>
        </div>
      </div>
    </section>
  )
}

export default Collaboration
