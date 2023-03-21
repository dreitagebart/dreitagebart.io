import styled from '@emotion/styled'

import { typeIt } from './animation'

interface Props {
  paused: boolean
}

export const RightArm = styled.div<Props>`
  background: url('/me.png') 0 0 no-repeat;
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
