import styled from '@emotion/styled'

export const Character = styled.div`
  width: 400px;
  height: 800px;
  left: 50%;
  top: 0;
  margin-left: -200px;
  background-size: 750px;
  position: relative;
  display: block;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    & {
      transform: scale(0.7);
      top: -120px;
    }
  }
`
