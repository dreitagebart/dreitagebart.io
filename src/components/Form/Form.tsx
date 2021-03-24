import React, { FormHTMLAttributes } from "react"

import { _Form } from "./Styled"

interface Props extends FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<Props> = ({ children, ...props }) => {
  return <_Form {...props}>{children}</_Form>
}
