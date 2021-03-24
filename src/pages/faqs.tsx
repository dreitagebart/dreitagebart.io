import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import { PageLayout } from "../layouts"

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <PageLayout title="support">
      <h2>Frequently asked questions</h2>
      <p>
        Did I leave something out that you were looking for an answer to? Feel
        free to reach out and ask me.
      </p>
      {/* <ul>
        <li>How long have you been drawing for?</li>
        <li>How do you glitch images?</li>
        <li>What tablet do you draw and paint on?</li>
        <li>Which stylus do you recommend for iPad drawing?</li>
        <li>How did you learn to draw on an iPad?</li>
        <li>How do you paint so smoothly with the brush tool?</li>
        <li>How do you draw such straight lines?</li>
        <li>
          How do you export high resolution Paper drawings to the Camera Roll?
        </li>
        <li>Have you ever thought about writing a Mastering Paper book?</li>
        <li>How do you make time lapse videos of your iPad drawings?</li>
        <li>What tech do you use?</li>
      </ul> */}
    </PageLayout>
  )
}

export default Page
