import * as React from "react";
import {Helmet} from "react-helmet";

import { Layout } from "@components"
import { About, Talents } from "./home/index"

import "@scss/app.scss"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
          <title>Tsukiakari Academy</title>
      </Helmet>

      <Layout color="#656FD4">
        <About />
        <Talents />
      </Layout>
    </>
  );
}

export default IndexPage
