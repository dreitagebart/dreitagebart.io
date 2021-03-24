import styled from "styled-components"

export const _Footer = styled.div`
  background: linear-gradient(
    to right,
    #151f2e 0%,
    #0d131c 20%,
    #0d131c 80%,
    #151f2e 100%
  );
  border-top: 1px solid #efefef;
  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
  font-weight: lighter;
  color: #efefef;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;

  & a {
    color: #efefef;
  }

  & a:hover {
    color: #6fa5f2;
  }
`

export const _Amazon = styled.div`
  a:hover {
    color: #ff9900;
  }
`

export const _Github = styled.div`
  a:hover {
    color: #bebfc1;
  }
`

export const _Telegram = styled.div`
  a:hover {
    color: #32afed;
  }
`

export const _YouTube = styled.div`
  a:hover {
    color: #ff0000;
  }
`

export const _PayPal = styled.div`
  a:hover {
    color: #114da5;
  }
`
