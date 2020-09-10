import styled from "styled-components"

import me from "../../assets/images/me.png"
import { blink } from "./keyFrames"

export const Eyes = styled.div`
  background: url(${me}) 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  display: block;
  top: 92px;
  left: 34px;
  width: 73px;
  height: 18px;
  background-position: -162px -350px;
  animation: ${blink} 10s steps(1) infinite, pan 10s ease-in-out infinite;
`
