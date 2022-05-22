import React from "react"

import { Header, Footer } from "@components"

export const Layout = ({ color, children }) => {
  return (
    <>
      <Header color={color} />
        <main className="main-content">
          {children}
        </main>
      <Footer />
    </>
  )
}
