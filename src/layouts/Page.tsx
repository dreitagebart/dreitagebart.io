import React, { Fragment } from "react"
import styled from "styled-components"

import { SEO, Footer, PageHeader, Container } from "../components"
import { SEOProps } from "../types"

interface Props extends SEOProps {
  children: any
}

const _Wrapper = styled.div``

export const PageLayout: React.FC<Props> = ({ children, title, keywords }) => {
  return (
    <_Wrapper>
      <SEO title={title} keywords={keywords}></SEO>
      <PageHeader></PageHeader>
      <Container content>{children}</Container>
      <Footer></Footer>
    </_Wrapper>
  )
}
