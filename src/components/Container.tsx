import React from "react"
import styled, { css } from "styled-components"

interface Props {
  content?: boolean
  children: any
}

interface _ContainerProps {
  isContent: boolean
}

const _Container = styled.div<_ContainerProps>`
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 960px;

  ${({ isContent }) =>
    isContent &&
    css`
      padding: 20px 40px;
      padding-bottom: 100px;
      line-height: 1.5;
    `}
`

export const Container: React.FC<Props> = ({ children, content = false }) => {
  return <_Container isContent={content}>{children}</_Container>
}
