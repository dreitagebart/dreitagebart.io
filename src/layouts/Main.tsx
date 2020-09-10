import React from "react"
import styled from "styled-components"

import { MainHeader, SEO, Footer, Container } from "../components"
import { SEOProps } from "../types"

interface Props extends SEOProps {
  children: any
}

const _Wrapper = styled.div``

export const MainLayout: React.FC<Props> = ({ children, title, keywords }) => {
  return (
    <_Wrapper>
      <SEO title={title} keywords={keywords}></SEO>
      <MainHeader></MainHeader>
      <Container content>{children}</Container>
      <Footer></Footer>
    </_Wrapper>
  )
}
