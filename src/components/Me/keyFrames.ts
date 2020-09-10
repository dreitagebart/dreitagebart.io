import { keyframes } from 'styled-components'

export const typeLeft = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(7deg);
  }
  75% {
    transform: rotateZ(-6deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

export const tapRight = keyframes`
  0%   {
    transform: rotateZ(0deg);
  }
  90%  {
    transform: rotateZ(-6deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

export const wobble = keyframes`
  0% {
    transform: rotateZ(-0.2deg);
  }
  50% {
    transform: rotateZ(0.2deg);
  }
  100% {
    transform: rotateZ(-0.2deg);
  }
`

export const blink = keyframes`
  0% {
    background-position: -162px -350px;
  }
  94% {
    background-position: -162px -350px;
  }
  98% {
    background-position: -162px -368px;
  }
  100% {
    background-position: -162px -350px;
  }
`

export const headTilt = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(-4deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  38% {
    transform: rotateZ(2deg);
  }
  42% {
    transform: rotateZ(2deg);
  }
  45% {
    transform: rotateZ(-4deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  70% {
    transform: rotateZ(0deg);
  }
  82% {
    transform: rotateZ(0deg);
  }
  85% {
    transform: rotateZ(4deg);
  }
  90% {
    transform: rotateZ(4deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

export const sway = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(4deg);
  }
  45% {
    transform: rotateZ(4deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  70% {
    transform: rotateZ(0deg);
  }
  75% {
    transform: rotateZ(-4deg);
  }
  90% {
    transform: rotateZ(-4deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`

export const steam = keyframes`
  0% {
    top: 100px;
    opacity: 0.1;
    visibility: visible;
  }
  20% {
    top: 80px;
    opacity: 0.2;
  }
  40% {
    top: 60px;
    opacity: 0.4;
  }
  60% {
    top: 40px;
    opacity: 0.2;
  }
  80% {
    top: 20px;
    opacity: .075;
  }
  100% {
    top: 0px;
    opacity: 0;
    visibility: hidden;
  }
`
