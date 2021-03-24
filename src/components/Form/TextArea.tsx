import React, { TextareaHTMLAttributes } from "react"

import { _TextArea } from "./Styled"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<Props> = ({ ...props }) => {
  return <_TextArea {...props}></_TextArea>
}
