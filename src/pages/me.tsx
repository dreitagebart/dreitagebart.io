import React from "react"

import { TLDR } from "../components"
import { PageLayout } from "../layouts"

const Page: React.FC = () => {
  return (
    <PageLayout title="me">
      <h2>That's me</h2>
      <TLDR>i am a crazy guy who loves web technologies, music and stuff</TLDR>
    </PageLayout>
  )
}

export default Page
