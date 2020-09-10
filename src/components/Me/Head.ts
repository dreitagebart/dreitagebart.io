import styled, { css } from "styled-components"

import me from "../../assets/images/me.png"
import { headTilt } from "./keyFrames"
import { PauseProps } from "../../types"

const tiltIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${headTilt};
        animation-duration: 20s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${headTilt};
        animation-duration: 20s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      `

export const Head = styled.div<PauseProps>`
  background: url(${me}) 0 0 no-repeat;
  background-size: 750px;
  position: absolute;
  display: block;
  top: -148px;
  left: 106px;
  width: 160px;
  height: 194px;
  background-position: 0px -265px;
  transform-origin: 50% 85%;
  ${tiltIt}
`
