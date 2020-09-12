import React from "react"
import styled from "styled-components"

import { Container } from "./Container"
import { Box } from "@dreitagebart/box"

interface Props {}

const _Wrapper = styled.div`
  background: linear-gradient(to right, #111111 0%, #333333 50%, #111111 100%);
  border-top: 1px solid #efefef;
  box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
  font-weight: lighter;
  color: #efefef;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
`

const _Amazon = styled.div`
  a:hover {
    color: #ff9900;
  }
`

const _Github = styled.div`
  a:hover {
    color: #bebfc1;
  }
`

const _YouTube = styled.div`
  a:hover {
    color: #ff0000;
  }
`

const _PayPal = styled.div`
  a:hover {
    color: #114da5;
  }
`

export const Footer: React.FC<Props> = () => {
  return (
    <_Wrapper>
      <Container>
        <Box
          direction="row"
          align="center"
          justify="between"
          margin={{ vertical: 20 }}
        >
          <Box
            direction="row"
            align="center"
            justify="center"
            gutter={8}
            style={{ fontWeight: "lighter", fontSize: 16 }}
          >
            <i
              className="bx bx-code-alt bx-sm"
              style={{ color: "#afafaf" }}
            ></i>
            <div>with</div>
            <i className="bx bxs-heart bx-sm" style={{ color: "#eb4034" }}></i>
            <div>by me</div>
          </Box>
          <Box direction="row" align="center" gutter={12}>
            <_Amazon>
              <a href="https://www.amazon.de/hz/wishlist/ls/1P4185Y05ABYP?ref_=wl_share">
                <i className="bx bxl-amazon bx-sm"></i>
              </a>
            </_Amazon>
            <_Github>
              <a href="https://github.com/dreitagebart" target="_blank">
                <i className="bx bxl-github bx-sm"></i>
              </a>
            </_Github>
            <_PayPal>
              <a href="https://paypal.me/sbuechold" target="_blank">
                <i className="bx bxl-paypal bx-sm"></i>
              </a>
            </_PayPal>
            <_YouTube>
              <a
                href="https://www.youtube.com/c/StefanB%C3%BCchold/playlists"
                target="_blank"
              >
                <i className="bx bxl-youtube bx-sm"></i>
              </a>
            </_YouTube>
          </Box>
        </Box>
      </Container>
    </_Wrapper>
  )
}
