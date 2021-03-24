import React from "react"

import { _Sidebar } from "./Styled"
import { Me } from "./Me"
import { Content } from "./Content"

interface Props {}

export const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <_Sidebar>
      <Me></Me>
      <Content>{children}</Content>
    </_Sidebar>
  )
}
