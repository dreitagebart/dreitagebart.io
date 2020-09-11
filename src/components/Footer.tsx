import React from "react"
import styled from "styled-components"

import { Container } from "./Container"
import { Box } from "@dreitagebart/box"

interface Props {}

const _Wrapper = styled.div`
  background: linear-gradient(to right, #111111 0%, #333333 50%, #111111 100%);
  border-top: 1px solid #efefef;
  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
  font-weight: lighter;
  color: #efefef;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
`

export const Footer: React.FC<Props> = () => {
  return (
    <_Wrapper>
      <Container>
        <Box
          direction="row"
          align="center"
          justify="between"
          margin={{ vertical: 20 }}
        >
          <div>dreitagebart.io &copy; 2020</div>
          <div>Something more</div>
        </Box>
      </Container>
    </_Wrapper>
  )
}
