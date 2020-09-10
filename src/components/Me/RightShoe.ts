import styled, { css } from "styled-components"

import me from "../../assets/images/me.png"
import { tapRight } from "./keyFrames"
import { PauseProps } from "../../types"

const tapIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${tapRight};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${tapRight};
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      `

export const RightShoe = styled.div<PauseProps>`
  display: block;
  position: absolute;
  top: 594px;
  left: 187px;
  width: 135px;
  height: 81px;
  background: url(${me}) 0 0 no-repeat;
  background-position: -453px -749px;
  background-size: 750px;
  transform-origin: 35% 12%;
  ${tapIt}
`
