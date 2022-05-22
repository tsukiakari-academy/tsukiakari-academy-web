import * as React from "react";
import {Helmet} from "react-helmet";

import { Layout } from "@components"

import Banner from "./home/banner/banner"
import About from "./home/about/about"
import Talents from "./home/talents/talents"

import "@scss/app.scss"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
          <title>Tsukiakari Academy</title>
      </Helmet>

      <Layout color="#656FD4">
        <Banner />
        <About />
        <Talents />
      </Layout>
    </>
  );
}

export default IndexPage
