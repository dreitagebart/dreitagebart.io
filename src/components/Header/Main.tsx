import React, { Fragment } from "react"
import { Box } from "@dreitagebart/box"

import { Intro } from "./Intro"
import { Me } from "../Me"
import { Menu } from "./Menu"
import { Container } from "../Container"

interface Props {}

export const MainHeader: React.FC<Props> = () => {
  return (
    <Fragment>
      <Box
        height={420}
        background="linear-gradient(to right, #222222 0%, #333333 50%, #222222 100%)"
        style={{
          color: "#efefef",
          fontWeight: "lighter",
          letterSpacing: 1
        }}
        border={{ bottom: "1px solid #fff" }}
        shadow="md"
      >
        <Container>
          <Menu></Menu>
        </Container>
        <Intro></Intro>
      </Box>
      <Me></Me>
    </Fragment>
  )
}
