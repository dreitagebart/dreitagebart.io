import React from "react"
import Typist from "react-typist"
import { Box } from "@dreitagebart/box"

import { _Wrapper } from "./Styled"

interface Props {}

export const Intro: React.FC<Props> = () => {
  return (
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
}
