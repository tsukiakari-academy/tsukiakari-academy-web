import * as React from "react";
import {Helmet} from "react-helmet";

import "@scss/app.scss"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
          <title>Tsukiakari Academy</title>
          <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet"></link>
      </Helmet>

      <div className="dummy-container">
        <div className="dummy-container__title">
          Tsukiakari Academy
        </div>
      </div>
    </>
  );
}

export default IndexPage
