import React, { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const _Submit = styled.button`
  transition: all 300ms ease-in;
  cursor: pointer;
  color: #efefef;
  background: #222;
  outline: 0;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 8px 12px;

  &:hover {
    background: #333;
  }
`

export const Submit: React.FC<Props> = ({ children, ...props }) => {
  return (
    <_Submit type="submit" {...props}>
      {children}
    </_Submit>
  )
}
