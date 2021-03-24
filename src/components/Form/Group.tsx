import React, { HTMLAttributes } from "react"

import { _Group } from "./Styled"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Group: React.FC<Props> = ({ ...props }) => {
  return <_Group {...props}></_Group>
}
