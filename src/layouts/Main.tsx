import React from "react"

import { MainHeader, SEO, Footer, Container, Global } from "../components"

interface Props {
  title?: string
  keywords?: string
}

export const MainLayout: React.FC<Props> = ({ title, keywords }) => {
  return (
    <Global title={title}>
      <SEO keywords={keywords}></SEO>
      <MainHeader></MainHeader>
      <Container content></Container>
      <Footer></Footer>
    </Global>
  )
}
