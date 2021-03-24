import React from "react"

import { _SubTitle } from "./Styled"

interface Props {}

export const SubTitle: React.FC<Props> = ({ children }) => {
  return <_SubTitle>{children}</_SubTitle>
}
