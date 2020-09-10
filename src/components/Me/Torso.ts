import styled, { css } from 'styled-components'

import { sway } from './keyFrames'
import { PauseProps } from './types'

const swayIt = ({ paused }: PauseProps) =>
  paused
    ? css`
        animation-name: ${sway};
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-play-state: paused;
      `
    : css`
        animation-name: ${sway};
        animation-duration: 20s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      `

export const Torso = styled.div<PauseProps>`
  /* transition: all 0.6s ease-in; */
  background-size: 750px;
  display: block;
  position: absolute;
  display: block;
  top: 138px;
  left: 0px;
  width: 389px;
  height: 252px;
  ${swayIt}
  transform-origin: 50% 100%;
`
