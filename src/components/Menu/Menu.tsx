import React from "react"
import { Box } from "@dreitagebart/box"

import { _Menu, _Item } from "./Styled"
import { Logo } from "./Logo"

interface Props {}

export const Menu: React.FC<Props> = () => {
  return (
    <_Menu direction="row" align="center" justify="between">
      <Logo></Logo>
      <Box direction="row" gutter={20} width="100%" align="center">
        <_Item to="/">Home</_Item>
        <_Item to="/me">Me</_Item>
        <_Item to="/blog">Blog</_Item>
        <_Item to="/contact">Contact</_Item>
      </Box>
      <Box direction="row" align="center" gutter={20}>
        <a href="https://github.com/dreitagebart" target="_blank">
          <i className="bx bxl-github bx-md"></i>
        </a>
      </Box>
    </_Menu>
  )
}
