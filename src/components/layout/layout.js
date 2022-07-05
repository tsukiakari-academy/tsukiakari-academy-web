import React from "react"

import { Header, Footer } from "@components"

import "./layout.scss"

export const Layout = ({ color, children, linkClicked }) => {
  return (
    <>
      <Header color={color} linkClicked={(link) => linkClicked(link)}/>
        <main className="main-content">
          {children}
        </main>
      <Footer />
    </>
  )
}
