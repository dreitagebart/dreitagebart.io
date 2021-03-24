import React, { InputHTMLAttributes } from "react"

import { _TextInput } from "./Styled"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: React.FC<Props> = ({ ...props }) => {
  return <_TextInput {...props}></_TextInput>
}
