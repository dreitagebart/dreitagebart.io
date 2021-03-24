import styled from "styled-components"

export const _Page = styled.div`
  padding: 12px 0;
  background: linear-gradient(to right, #1b2738 0%, #162336 50%, #1b2738 100%);
  color: #efefef;
  font-weight: lighter;
  letter-spacing: 1;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const _Main = styled.div`
  padding-top: 12px;
  height: 420px;
  background: linear-gradient(
    to right,
    #30435e 0%,
    #162336 30%,
    #162336 60%,
    #30435e 100%
  );
  color: #efefef;
  font-weight: lighter;
  letter-spacing: 1;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 600px) {
    & {
      height: 210px;
    }

    & .Typist {
      font-size: 32px;
    }
  }
`
