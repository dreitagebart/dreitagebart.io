import React from "react"

import { _Content } from "./Styled"

interface Props {}

export const Content: React.FC<Props> = ({ children }) => {
  return <_Content>{children}</_Content>
}
