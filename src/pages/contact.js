import * as React from "react"
import { Helmet } from "react-helmet"

import { Layout } from "@components"

import ContactBanner from "./contact/contact-banner/contact-banner"
import ContactForm from "./contact/contact-form/contact-form"

import "@scss/app.scss"

const Contact = () => {
  const [navigation, setNavigation] = React.useState({})

  return (
    <>
      <Helmet>
        <title>About Us - Tsukiakari Academy</title>
      </Helmet>

      <Layout color="#1c2742" navigation={navigation}>
        <ContactBanner />
        <ContactForm />
      </Layout>
    </>
  );
}

export default Contact
