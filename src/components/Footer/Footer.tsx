import React from "react"
import { Box } from "@dreitagebart/box"

import {
  _Amazon,
  _Github,
  _PayPal,
  _Telegram,
  _Footer,
  _YouTube
} from "./Styled"
import { Container } from "../Container"
import { Link } from "gatsby"

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <_Footer>
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
            style={{ fontWeight: "lighter", fontSize: 16, cursor: "default" }}
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
              <a
                href="https://www.amazon.de/hz/wishlist/ls/1P4185Y05ABYP?ref_=wl_share"
                target="_blank"
              >
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
            <_Telegram>
              <a href="https://t.me/dreitagebart" target="_blank">
                <i className="bx bxl-telegram bx-sm"></i>
              </a>
            </_Telegram>
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
        <Box direction="row" gutter={8} style={{ color: "#efefef" }}>
          <Link to="/support">Support</Link>
          &bull;
          <Link to="/faqs">FAQs</Link>
          &bull;
          <Link to="/source">Source code</Link>
        </Box>
      </Container>
    </_Footer>
  )
}
