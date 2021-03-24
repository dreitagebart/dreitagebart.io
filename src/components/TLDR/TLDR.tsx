import React from "react"

import { _TLDR, _Heading } from "./Styled"

interface Props {}

export const TLDR: React.FC<Props> = ({ children }) => {
  return (
    <_TLDR>
      <_Heading>tl;dr</_Heading>
      <div>{children}</div>
    </_TLDR>
  )
}
