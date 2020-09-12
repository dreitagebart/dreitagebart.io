import React from "react"
import styled from "styled-components"
import Typist from "react-typist"
import { Box } from "@dreitagebart/box"

const _Wrapper = styled(Box)`
  font-size: 60px;
  color: #efefef;
  margin: 40px;
  height: 100%;

  a {
    color: #afafaf;
  }

  a:hover {
    color: #efefef;
  }
`

export const Intro: React.FC = () => (
  <_Wrapper align="center" justify="center" gutter={40}>
    <Typist>
      <span>Hi, I'm Fred</span>
      <Typist.Delay ms={800}></Typist.Delay>
      <span>...</span>
      <Typist.Delay ms={800}></Typist.Delay>
      <Typist.Backspace count={7} delay={800}></Typist.Backspace>
      <span>Stefan...</span>
    </Typist>
    <Box direction="row" align="center" justify="center">
      <a href="/#me">
        <i className="bx bxs-chevron-down-circle bx-burst-hover"></i>
      </a>
    </Box>
  </_Wrapper>
)
