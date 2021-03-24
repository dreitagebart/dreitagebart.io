import React from "react"

import { _Meta } from "./Styled"

interface Props {
  title?: string
}

export const BlogMeta: React.FC<Props> = ({ children, title }) => {
  return <_Meta title={title}>{children}</_Meta>
}
