import React, { Fragment } from "react"
import Helmet from "react-helmet"
import { normalize } from "polished"
import { createGlobalStyle } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import favicon from "../assets/images/favicon.png"
import { SEOProps } from "../types"

interface Props extends SEOProps {}

const GlobalStyle = createGlobalStyle`
${normalize()}

* {
  box-sizing: border-box;
}

#___gatsby{
  overflow: hidden;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: #efefef;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

a {
  transition: color 300ms ease-in;
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #888;
}

.Typist {
  user-select: none;
  text-align: center;
}

.Typist .Cursor {
  display: inline-block; 
}

.Typist .Cursor--blinking {
  opacity: 1;
  animation: blink 1s linear infinite; 
}

@keyframes blink {
  0% {
    opacity: 1; }
  50% {
    opacity: 0; }
  100% {
    opacity: 1; } 
}
`

export const SEO: React.FC<Props> = ({ keywords, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  let pageTitle = site.siteMetadata.title

  if (title) {
    pageTitle += ` ~ ${title}`
  }

  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <Helmet>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
        <meta name="author" content={site.siteMetadata.author}></meta>
        <meta name="description" content={site.siteMetadata.description}></meta>
        {keywords && <meta name="keywords" content={keywords}></meta>}
        <link rel="icon" type="image/png" href={favicon} />
        <link
          href="https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400"
          rel="stylesheet"
        ></link>
      </Helmet>
    </Fragment>
  )
}
