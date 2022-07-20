import * as React from "react"
import { Helmet } from "react-helmet"

import { notFound } from "@images"
import { Layout } from "@components"

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not Found - Tsukiakari Academy</title>
      </Helmet>

      <Layout withoutMenu={true}>
        <section style={{ paddingBottom: 100, paddingTop: 100 }}>
          <div className="container">
            <img src={notFound} alt="Not Found" style={{ width: "100%" }} />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default NotFoundPage
