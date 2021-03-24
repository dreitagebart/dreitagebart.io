import React from "react"
import { Link } from "gatsby"

import { _Title } from "./Styled"

interface Props {
  to: string
}

export const BlogTitle: React.FC<Props> = ({ children, to }) => {
  return (
    <Link to={to}>
      <_Title>{children}</_Title>
    </Link>
  )
}
