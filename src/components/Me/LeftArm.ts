import styled, { css } from "styled-components"

import me from "../../assets/images/me.png"
import { typeLeft } from "./keyFrames"
import { PauseProps } from "../../types"

const typeIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${typeLeft};
        animation-duration: 0.4s;
        animation-duration: linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${typeLeft};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      `

export const LeftArm = styled.div<PauseProps>`
  background: url(${me}) 0 0 no-repeat;
  background-size: 750px;
  background-position: -265px -341px;
  position: absolute;
  display: block;
  top: 159px;
  left: 0;
  width: 165px;
  height: 73px;
  transform-origin: 9% 35%;
  transform: rotateZ(0deg);
  ${typeIt}
`
