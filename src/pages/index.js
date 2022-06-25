import * as React from "react";
import {Helmet} from "react-helmet";

import { Layout } from "@components"

import Banner from "./home/banner/banner"
import About from "./home/about/about"
import Talents from "./home/talents/talents"
import Teams from "./home/teams/teams"

import "@scss/app.scss"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Tsukiakari Academy</title>
      </Helmet>

      <Layout color="#1c2742">
        <Banner />
        <About />
        <Teams />
        <Talents />
      </Layout>
    </>
  );
}

export default IndexPage
