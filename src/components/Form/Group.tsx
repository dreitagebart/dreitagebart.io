import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface Props extends HTMLAttributes<HTMLDivElement> {}

const _Group = styled.div`
  max-width: 420px;
  width: 100%;
  margin-bottom: 20px;
`

export const Group: React.FC<Props> = ({ ...props }) => {
  return <_Group {...props}></_Group>
}
