import * as React from "react"
import { Helmet } from "react-helmet"

import { Layout } from "@components"

import BenfitRules from "./registration/benefit-rules/benefit-rules"
import RegistrationBanner from "./registration/registration-banner/registration-banner"
import RegistrationForm from "./registration/registration-form/registration-form"
import RegistrationFaqs from "./registration/registration-faqs/registration-faqs"

import "@scss/app.scss"

const RegistrationPage = () => {
  const [navigation, setNavigation] = React.useState({})

  return (
    <>
      <Helmet>
        <title>Registration - Tsukiakari Academy</title>
      </Helmet>

      <Layout color="#1c2742" navigation={navigation}>
        <RegistrationBanner />
        <BenfitRules />
        <RegistrationForm />
        <RegistrationFaqs />
      </Layout>
    </>
  );
}

export default RegistrationPage
