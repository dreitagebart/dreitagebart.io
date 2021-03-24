import styled, { css } from "styled-components"

interface _ContainerProps {
  isContent: boolean
}

export const _Container = styled.div<_ContainerProps>`
  width: 100%;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1200px;

  /* @media screen and (min-width: 1600px) {
    border: 1px solid yellowgreen;
    max-width: 1600px;
  } */

  /* @media screen and (min-width: 1200px) {
    border: 1px solid red;
    max-width: 1200px;
  } */

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 450px) {
    padding: 0 10px;
  }

  ${({ isContent }) =>
    isContent &&
    css`
      padding: 20px 40px;
      padding-bottom: 140px;
      line-height: 1.5;

      @media screen and (max-width: 800px) {
        border: 1px solid green;
        max-width: 800px;
      }
    `}
`
