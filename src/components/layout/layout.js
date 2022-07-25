import React from "react"

import { generateClassNames } from "@utils/class-name-generator"
import { Header, Footer } from "@components"

import "./layout.scss"

export const Layout = (props) => {
  const {
    color,
    children,
    navigation,
    withoutMenu,
    home = false
  } = props

  return (
    <>
      <Header color={color} navigation={navigation} withoutMenu={withoutMenu} />
        <main className={generateClassNames("main-content", [home && "without-gap"])}>
          {children}
        </main>
      <Footer />
    </>
  )
}
