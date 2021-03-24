import React from "react"

import { _Title } from "./Styled"

interface Props {}

export const Title: React.FC<Props> = ({ children }) => {
  return <_Title>{children}</_Title>
}
