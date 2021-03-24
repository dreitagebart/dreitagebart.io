import React from "react"

import { PageLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <PageLayout title="support">
      <h2>May the source be with you</h2>
      <p>
        This website is based on a JAMstack approach. Hosting is powered by{" "}
        <a href="https://netlify.com" target="_blank">
          netlify
        </a>
        .
      </p>
      <p>
        You can dig into the source code on github. Check out this{" "}
        <a
          href="https://github.com/dreitagebart/dreitagebart.io"
          target="_blank"
        >
          repository
        </a>{" "}
        for more information.
      </p>
    </PageLayout>
  )
}

export default Page
