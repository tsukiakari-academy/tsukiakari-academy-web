import React from "react"

import { Header, Footer } from "@components"

import "./layout.scss"

export const Layout = (props) => {
  const {
    color,
    children,
    navigation,
    withoutMenu
  } = props

  return (
    <>
      <Header color={color} navigation={navigation} withoutMenu={withoutMenu} />
        <main className="main-content">
          {children}
        </main>
      <Footer />
    </>
  )
}
