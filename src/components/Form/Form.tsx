import React, { FormHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends FormHTMLAttributes<HTMLFormElement> {}

const _Form = styled.form`
  width: 100%;
`

export const Form: React.FC<Props> = ({ children, ...props }) => {
  return <_Form {...props}>{children}</_Form>
}
