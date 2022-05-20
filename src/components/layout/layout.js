import React from "react"

import { Header } from "@components"

export const Layout = ({ color, children }) => {
  return (
    <>
      <Header color={color} />
        {children}
      {/* footer */}
    </>
  )
}