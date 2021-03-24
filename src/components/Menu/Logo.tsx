import React from "react"
import { Link } from "gatsby"

import { _Logo } from "./Styled"

interface Props {}

export const Logo: React.FC<Props> = () => {
  return (
    <_Logo>
      <Link to="/">
        <strong>dreitagebart.io</strong>
      </Link>
    </_Logo>
  )
}
