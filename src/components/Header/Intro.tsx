import React from "react"
import styled from "styled-components"
import Typist from "react-typist"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 60px;
  color: #efefef;
  margin: 40px;
  height: 100%;
`

export const Intro: React.FC = () => (
  <Wrapper>
    <Typist>
      <span>Hi, I'm Fred</span>
      <Typist.Delay ms={800}></Typist.Delay>
      <span>...</span>
      <Typist.Delay ms={800}></Typist.Delay>
      <Typist.Backspace count={7} delay={800}></Typist.Backspace>
      <span>Stefan...</span>
    </Typist>
  </Wrapper>
)
