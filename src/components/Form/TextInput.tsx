import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const _TextInput = styled.input.attrs(({ type }) => ({
  type: type ? type : "text"
}))`
  transition: all 300ms ease-in;
  width: 100%;
  outline: 0;
  line-height: 1.5;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #afafaf;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    border: 1px solid #888;
  }

  &:focus {
    border: 1px solid #888;
  }
`

export const TextInput: React.FC<Props> = ({ ...props }) => {
  return <_TextInput {...props}></_TextInput>
}
