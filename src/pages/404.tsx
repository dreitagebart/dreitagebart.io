import React from "react"

import { Me } from "../components"
import { PageLayout } from "../layouts"

const Page: React.FC = () => {
  return (
    <PageLayout title="page not found">
      <h2>Oh, that shouldn't have happened</h2>
      <br></br>
      <Me></Me>
    </PageLayout>
  )
}

export default Page
