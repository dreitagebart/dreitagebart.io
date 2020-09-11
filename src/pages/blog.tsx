import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import { PageLayout } from "../layouts"

interface Props {
  data: any
}

const _Title = styled.h2`
  margin-bottom: 12px;
`

const _Small = styled.div`
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 1px;
  margin: 12px 0;
`

const Page: React.FC<Props> = ({ data, ...props }) => {
  return (
    <PageLayout title="blog">
      <h1>Blog</h1>
      {data.allMdx.edges.map((edge: any) => {
        return (
          <div key={edge.node.id} style={{ marginBottom: 20 }}>
            <_Title>
              <Link to={`/blog${edge.node.fields.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </_Title>
            <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}></div>
            <_Small title={edge.node.frontmatter.date}>
              {edge.node.frontmatter.fromNow}
            </_Small>
          </div>
        )
      })}
    </PageLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd, Do MMMM YYYY - HH:mm")
            fromNow: date(fromNow: true)
            title
            description
          }
        }
      }
    }
  }
`
