import styled from '@emotion/styled'

import { tapIt } from './animation'

interface Props {
  paused: boolean
}

export const RightShoe = styled.div<Props>`
  display: block;
  position: absolute;
  top: 594px;
  left: 187px;
  width: 135px;
  height: 81px;
  background: url('/me.png') 0 0 no-repeat;
  background-position: -453px -749px;
  background-size: 750px;
  transform-origin: 35% 12%;
  ${tapIt}
`
