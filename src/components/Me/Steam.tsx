import styled from '@emotion/styled'

import { steamIt } from './animation'

export const Steam = styled.div`
  /* color: red; */
  /* background-color: brown; */
  /* border: 1px solid #666; */
  position: absolute;
  top: 460px;
  left: 460px;
  ${steamIt}

  &::before,
  &::after {
    content: ' ';
    position: absolute;
    top: 500px;
    left: -25px;
    border-right: 0px solid transparent;
    border-top: 2px solid black;
    border-left: 5px solid #111;
    border-bottom: 2px solid transparent;
    width: 40px;
    height: 70px;
    z-index: 4;
    border-radius: 80% 0 10% 10%;
    transform: rotate(168deg) skewY(10deg);
    filter: blur(7px);
  }

  &::after {
    top: 460px;
    left: -45px;
    z-index: 4;
    border-radius: 80% 0 10% 10%;
    transform: rotate(315deg) skewY(10deg);
    filter: blur(7px);
  }
`
