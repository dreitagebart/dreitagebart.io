import styled, { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

export const _Global = createGlobalStyle`
${normalize()}

* {
  box-sizing: border-box;
}

#___gatsby{
  overflow: hidden;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: #efefef;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
}

/* h1, h2, h3, h4, h5, h6, p {
  margin: 0;
} */

a {
  transition: color 300ms ease-in;
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #6fa5f2;
}

.Typist {
  user-select: none;
  text-align: center;
}

.Typist .Cursor {
  display: inline-block; 
}

.Typist .Cursor--blinking {
  opacity: 1;
  animation: blink 1s linear infinite; 
}

@keyframes blink {
  0% {
    opacity: 1; }
  50% {
    opacity: 0; }
  100% {
    opacity: 1; } 
}
`

export const _Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`
