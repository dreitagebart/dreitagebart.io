import styled from '@emotion/styled'

import { wobbleIt } from './animation'

interface Props {
  paused: boolean
}

export const Notebook = styled.div<Props>`
  background: url('/me.png') 0 0 no-repeat;
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
