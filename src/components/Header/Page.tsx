import React, { Fragment } from "react"
import { Box } from "@dreitagebart/box"

import { Menu } from "./Menu"
import { Container } from "../Container"

interface Props {}

export const PageHeader: React.FC<Props> = () => {
  return (
    <Box
      background="linear-gradient(to right, #222222 0%, #444444 50%, #222222 100%)"
      style={{
        color: "#efefef",
        fontWeight: "lighter",
        letterSpacing: 1
      }}
      padding={{ vertical: 12 }}
      border={{ bottom: "1px solid #fff" }}
      shadow="md"
    >
      <Container>
        <Menu>
          <div>dreitagebart</div>
        </Menu>
      </Container>
    </Box>
  )
}
