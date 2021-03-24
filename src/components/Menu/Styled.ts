import styled from "styled-components"
import { Box } from "@dreitagebart/box"
import { Link } from "gatsby"

export const _Menu = styled(Box)`
  & a {
    transition: all 300ms ease-in;
    color: #efefef;
  }

  & a:hover {
    color: #6fa5f2;
  }
`

export const _Logo = styled.div`
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const _Item = styled(Link)`
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 6px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0px;
    height: 2px;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    background-color: #6fa5f2;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  &:hover:before,
  &:hover:after {
    width: 50%;
    opacity: 1;
  }
`
