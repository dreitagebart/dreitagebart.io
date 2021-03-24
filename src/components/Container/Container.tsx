import React from "react"

import { _Container } from "./Styled"

interface Props {
  content?: boolean
}

export const Container: React.FC<Props> = ({ children, content = false }) => {
  return <_Container isContent={content}>{children}</_Container>
}
