import React, { Fragment } from "react"
import styled from "styled-components"

import { Intro } from "./Intro"
import { Me } from "../Me"
import { Menu } from "./Menu"
import { Container } from "../Container"

interface Props {}

const _Wrapper = styled.div`
  padding-top: 12px;
  height: 420px;
  background: linear-gradient(to right, #222222 0%, #333333 50%, #222222 100%);
  color: #efefef;
  font-weight: lighter;
  letter-spacing: 1;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 600px) {
    & {
      height: 210px;
    }

    & .Typist {
      font-size: 32px;
    }
  }
`

export const MainHeader: React.FC<Props> = () => {
  return (
    <Fragment>
      <_Wrapper>
        <Container>
          <Menu></Menu>
        </Container>
        <Intro></Intro>
      </_Wrapper>
      <Me></Me>
    </Fragment>
  )
}
