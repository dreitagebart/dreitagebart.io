import React, { LabelHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

const _Label = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 100%;
`

export const Label: React.FC<Props> = ({ children, ...props }) => {
  return <_Label {...props}>{children}</_Label>
}
