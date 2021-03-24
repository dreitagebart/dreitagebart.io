import React from "react"

import { Container } from "../Container"
import { _Page } from "./Styled"
import { Menu } from "../Menu"

interface Props {}

export const PageHeader: React.FC<Props> = () => {
  return (
    <_Page>
      <Container>
        <Menu></Menu>
      </Container>
    </_Page>
  )
}
