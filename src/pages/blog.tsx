import React from "react"
import { graphql } from "gatsby"

import { PageLayout } from "../layouts"
import { BlogMeta, BlogTitle, Blog } from "../components"

interface Props {
  data: any
}

const Page: React.FC<Props> = ({ data }) => {
  return (
    <PageLayout title="blog">
      <h2>Blog</h2>
      {data.allMdx.edges.map((edge: any) => {
        return (
          <Blog key={edge.node.id}>
            <BlogTitle to={`/blog${edge.node.fields.slug}`}>
              {edge.node.frontmatter.title}
            </BlogTitle>
            <BlogMeta title={edge.node.frontmatter.date}>
              {edge.node.frontmatter.fromNow}
            </BlogMeta>
            <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}></div>
          </Blog>
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
