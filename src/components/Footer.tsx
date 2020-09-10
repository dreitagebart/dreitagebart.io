import React from "react"
import styled from "styled-components"

import { Container } from "./Container"
import { Box } from "@dreitagebart/box"

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <Box
      background="linear-gradient(to right, #222222 0%, #333333 50%, #222222 100%)"
      border={{ top: "1px solid #fff" }}
      shadow="md"
      style={{
        fontWeight: "lighter",
        color: "#efefef",
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0
      }}
      height={80}
    >
      <Container>
        <Box
          direction="row"
          align="center"
          justify="between"
          margin={{ top: 20 }}
        >
          <div>dreitagebart.io &copy; 2020</div>
          <div>Something more</div>
        </Box>
      </Container>
    </Box>
  )
}
