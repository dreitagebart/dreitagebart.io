import styled from '@emotion/styled'

import { tiltIt } from './animation'

interface Props {
  paused: boolean
}

export const Head = styled.div<Props>`
  background: url('/me.png') 0 0 no-repeat;
  background-size: 755px;
  position: absolute;
  display: block;
  top: -160px;
  left: 106px;
  width: 160px;
  height: 194px;
  background-position: 0px -265px;
  transform-origin: 50% 85%;
  ${tiltIt}
`
