import React, { LabelHTMLAttributes } from "react"

import { _Label } from "./Styled"

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<Props> = ({ children, ...props }) => {
  return <_Label {...props}>{children}</_Label>
}
