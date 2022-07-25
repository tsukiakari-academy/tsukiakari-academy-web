import React from "react"

import "./benefit-rules.scss"

const BenfitRules = () => {
  return (
    <section className="benefit-rules">
      <div className="container">
        <div className="benefit-rules__item">
          <h3 className="benefit-rules__title">Our Support For You</h3>
          <ul className="benefit-rules__list">
            <li className="benefit-rules__list-item">L2D Model + Rigged</li>
            <li className="benefit-rules__list-item">Stream Assets</li>
            <li className="benefit-rules__list-item">Management help</li>
            <li className="benefit-rules__list-item">Projects</li>
            <li className="benefit-rules__list-item">Full Support from the Team</li>
          </ul>
        </div>

        <div className="benefit-rules__item">
          <h3 className="benefit-rules__title">Audition Guidelines</h3>
          <ul className="benefit-rules__list">
            <li className="benefit-rules__list-item">You must be 18 years old or older</li>
            <li className="benefit-rules__list-item">Fluent in speaking English</li>
            <li className="benefit-rules__list-item">Able to deliver content at least three times a week</li>
            <li className="benefit-rules__list-item">Able to deliver content continously for at least one year</li>
            <li className="benefit-rules__list-item">Gender is irrelevant</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BenfitRules
