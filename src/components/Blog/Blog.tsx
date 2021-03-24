import React from "react"

import { _Blog } from "./Styled"

interface Props {}

export const Blog: React.FC<Props> = ({ children }) => {
  return <_Blog>{children}</_Blog>
}
