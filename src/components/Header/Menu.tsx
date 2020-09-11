import React from "react"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"

interface Props {}

export const Menu: React.FC<Props> = ({ children }) => {
  return (
    <Box direction="row" align="center" justify="between">
      <Box direction="row" gutter={20} width="100%" align="center">
        {children}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </Box>
      <Box direction="row" align="center" gutter={20}>
        <a href="https://github.com/dreitagebart" target="_blank">
          <i className="bx bxl-github bx-md"></i>
        </a>
      </Box>
    </Box>
  )
}
