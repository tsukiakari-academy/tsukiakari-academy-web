import * as React from "react";
import {Helmet} from "react-helmet";

import { Layout } from "@components"

import "@scss/app.scss"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
          <title>Tsukiakari Academy</title>
          <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet"></link>
      </Helmet>

      <Layout color="#656FD4">
        <div className="banner">
          <div className="banner__title">
            Tsukiakari Academy
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IndexPage
