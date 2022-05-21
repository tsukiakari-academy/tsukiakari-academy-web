import * as React from "react";
import {Helmet} from "react-helmet";

import { Layout } from "@components"
import { Banner } from "./home/index"

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
        <Banner />
      </Layout>
    </>
  );
}

export default IndexPage
