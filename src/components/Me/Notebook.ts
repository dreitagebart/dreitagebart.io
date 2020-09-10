import styled, { css } from "styled-components"

import me from "../../assets/images/me.png"
import { wobble } from "./keyFrames"
import { PauseProps } from "../../types"

const wobbleIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${wobble};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${wobble};
        animation-duration: 0.4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      `

export const Notebook = styled.div<PauseProps>`
  background: url(${me}) 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  top: 186px;
  left: 9px;
  width: 365px;
  height: 216px;
  background-position: -2px -466px;
  transform-origin: 50% 100%;
  ${wobbleIt}
`
