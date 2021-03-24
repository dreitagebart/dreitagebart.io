import React from "react"

import {
  SEO,
  Footer,
  PageHeader,
  Container,
  Global,
  Sidebar
} from "../components"

interface Props {
  title?: string
  keywords?: string
  children: any
}

export const PageLayout: React.FC<Props> = ({ children, title, keywords }) => {
  return (
    <Global title={title}>
      <SEO keywords={keywords}></SEO>
      <PageHeader></PageHeader>
      <Container content>
        <Sidebar>{children}</Sidebar>
      </Container>
      <Footer></Footer>
    </Global>
  )
}
