import React from "react"

import { PageLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <PageLayout title="thank you">
      <h2>Thank you!</h2>
      <p>I'll check what you sent to me... Perhaps I will answer you.</p>
    </PageLayout>
  )
}

export default Page
