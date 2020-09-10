import React from "react"
import styled, { css } from "styled-components"

interface Props {
  content?: boolean
  children: any
}

interface _ContainerProps {
  content: boolean
}

const _Container = styled.div<_ContainerProps>`
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 960px;
  /* border: 1px solid red; */
  ${({ content }) =>
    content &&
    css`
      padding-top: 24px;
      line-height: 1.5;
    `}
`

export const Container: React.FC<Props> = ({ children, content = false }) => {
  return <_Container content={content}>{children}</_Container>
}
