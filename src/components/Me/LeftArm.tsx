import styled from '@emotion/styled'

import { typeIt } from './animation'

interface Props {
  paused: boolean
}

export const LeftArm = styled.div<Props>`
  background: url('/me.png') 0 0 no-repeat;
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
