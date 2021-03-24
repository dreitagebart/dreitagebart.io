import React, { Fragment } from "react"

import { Me } from "../Me"
import { Container } from "../Container"
import { Menu } from "../Menu"
import { Intro } from "../Intro"
import { _Main } from "./Styled"

interface Props {}

export const MainHeader: React.FC<Props> = () => {
  return (
    <Fragment>
      <_Main>
        <Container>
          <Menu></Menu>
        </Container>
        <Intro></Intro>
      </_Main>
      <Me></Me>
    </Fragment>
  )
}
