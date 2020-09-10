import styled, { css } from "styled-components"

import me from "../../assets/images/me.png"
import { typeLeft } from "./keyFrames"
import { PauseProps } from "../../types"

const typeIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${typeLeft};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${typeLeft};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      `

export const RightArm = styled.div<PauseProps>`
  background: url(${me}) 0 0 no-repeat;
  background-size: 750px;
  background-position: -442px -323px;
  position: absolute;
  display: block;
  top: 148px;
  left: 231px;
  width: 157px;
  height: 91px;
  transform-origin: 90% 25%;
  ${typeIt}
`
