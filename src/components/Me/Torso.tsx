import styled from '@emotion/styled'

import { swayIt } from './animation'

interface Props {
  paused: boolean
}

export const Torso = styled.div<Props>`
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
