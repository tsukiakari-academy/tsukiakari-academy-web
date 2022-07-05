import * as React from "react";
import {Helmet} from "react-helmet";

import { Layout } from "@components"

import Banner from "./home/banner/banner"
import About from "./home/about/about"
import Talents from "./home/talents/talents"
import Teams from "./home/teams/teams"
import Faqs from "./home/faqs/faqs"

import "@scss/app.scss"

// markup
const IndexPage = () => {
  const aboutUsSection = React.useRef(null)
  const talentsSection = React.useRef(null)
  const faqsSection = React.useRef(null)

  const linkClicked = (link) => {
    switch (link) {
      case 'about-us':
        if(aboutUsSection){
          aboutUsSection.current.scrollIntoView({behavior: 'smooth'});
        }
        break
      case 'talents':
        if(talentsSection){
          talentsSection.current.scrollIntoView({behavior: 'smooth'})
        }
        break
      case 'faqs':
        if(faqsSection){
          faqsSection.current.scrollIntoView({behavior: 'smooth'})
        }
        break
      default:
        break;
    }
  }

  return (
    <>
      <Helmet>
        <title>Tsukiakari Academy</title>
      </Helmet>

      <Layout color="#1c2742" linkClicked={(link) => linkClicked(link)}>
        <Banner />
        <About refProp={aboutUsSection}/>
        <Teams />
        <Talents refProp={talentsSection}/>
        <Faqs refProp={faqsSection} />
      </Layout>
    </>
  );
}

export default IndexPage
