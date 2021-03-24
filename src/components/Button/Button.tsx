import React, { ButtonHTMLAttributes } from "react"

import { _Button } from "./Styled"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button" | "reset"
}

export const Button: React.FC<Props> = ({ type, children, ...props }) => {
  return (
    <_Button type={type} {...props}>
      {children}
    </_Button>
  )
}
