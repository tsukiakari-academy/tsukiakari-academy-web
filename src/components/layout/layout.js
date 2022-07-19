import React from "react"

import { Header, Footer } from "@components"

import "./layout.scss"

export const Layout = ({ color, children, navigation }) => {
  return (
    <>
      <Header color={color} navigation={navigation} />
        <main className="main-content">
          {children}
        </main>
      <Footer />
    </>
  )
}
