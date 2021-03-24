import { Box } from "@dreitagebart/box"
import React from "react"

import { _Me, _List, _Item, _Avatar, _Description } from "./Styled"

interface Props {}

export const Me: React.FC<Props> = () => {
  return (
    <_Me>
      <_Avatar></_Avatar>
      <_Description>
        This guy, also known as Fred or Stefan, is a software developer from
        southern region of germany. He is well experienced in SAP software
        development and i am passionate about web development, especially
        developing software solutions based on React.
      </_Description>
      <_List>
        <_Item>
          <a href="https://goo.gl/maps/GjVmrHE7SW2tfLjx9" target="_blank">
            <Box direction="row" gutter={6}>
              <i className="bx bxs-map bx-sm"></i>
              <div>Markelsheim, Germany</div>
            </Box>
          </a>
        </_Item>
        <_Item>
          <a href="https://github.com/dreitagebart" target="_blank">
            <Box direction="row" gutter={6}>
              <i className="bx bxl-github bx-sm"></i>
              <div>github</div>
            </Box>
          </a>
        </_Item>
        <_Item>
          <a href="https://dreitagebart.slack.com" target="_blank">
            <Box direction="row" gutter={6}>
              <i className="bx bxl-slack bx-sm"></i>
              <div>slack</div>
            </Box>
          </a>
        </_Item>
        <_Item>
          <a href="https://twitter.com/dreitagebart" target="_blank">
            <Box direction="row" gutter={6}>
              <i className="bx bxl-twitter bx-sm"></i>
              <div>twitter</div>
            </Box>
          </a>
        </_Item>
        <_Item>
          <a href="https://t.me/dreitagebart" target="_blank">
            <Box direction="row" gutter={6}>
              <i className="bx bxl-telegram bx-sm"></i>
              <div>telegram</div>
            </Box>
          </a>
        </_Item>
      </_List>
    </_Me>
  )
}
