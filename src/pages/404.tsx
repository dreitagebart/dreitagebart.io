import React from "react"
import { Me } from "../components"

import { PageLayout } from "../layouts"

const Page: React.FC = () => {
  return (
    <PageLayout title="page not found">
      <h1>Oh, that shouldn't have happened</h1>
      <Me></Me>
    </PageLayout>
  )
}

export default Page
