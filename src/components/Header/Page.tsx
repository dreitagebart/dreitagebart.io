import React from "react"
import styled from "styled-components"

import { Menu } from "./Menu"
import { Container } from "../Container"
import { useWindowSize } from "../../hooks"

interface Props {}

const _Wrapper = styled.div`
  padding: 12px 0;
  background: linear-gradient(to right, #222222 0%, #333333 50%, #222222 100%);
  color: #efefef;
  font-weight: lighter;
  letter-spacing: 1;
  border-bottom: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const PageHeader: React.FC<Props> = () => {
  const size = useWindowSize()

  return (
    <_Wrapper>
      <Container>
        <Menu>
          {size.width
            ? size.width > 600 && (
                <div>
                  <strong>dreitagebart.io</strong>
                </div>
              )
            : null}
        </Menu>
      </Container>
    </_Wrapper>
  )
}
