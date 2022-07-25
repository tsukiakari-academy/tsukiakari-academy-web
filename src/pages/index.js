import * as React from "react";
import { Helmet } from "react-helmet";

import { Layout } from "@components"

import Banner from "./home/banner/banner"
import About from "./home/about/about"
import Talents from "./home/talents/talents"
import Teams from "./home/teams/teams"
import Faqs from "./home/faqs/faqs"
import Collaboration from "./home/collaboration/collaboration"

import "@scss/app.scss"

const IndexPage = () => {
  const [navigation, setNavigation] = React.useState({})

  const onSetNavigation = (elRef) => {
    const listNavigation = Object.assign(navigation, elRef)

    setNavigation(listNavigation)
  }

  return (
    <>
      <Helmet>
        <title>Tsukiakari Academy</title>
      </Helmet>

      <Layout color="#1c2742" navigation={navigation} home={true}>
        <Banner />
        <About setNavigation={(elRef) => onSetNavigation(elRef)} />
        <Teams />
        <Talents setNavigation={(elRef) => onSetNavigation(elRef)} />
        <Faqs setNavigation={(elRef) => onSetNavigation(elRef)} />
        <Collaboration />
      </Layout>
    </>
  );
}

export default IndexPage
