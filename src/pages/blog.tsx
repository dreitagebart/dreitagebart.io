import React from "react"
import { graphql, Link } from "gatsby"

import { PageLayout } from "../layouts"

interface Props {
  data: any
}

const Page: React.FC<Props> = ({ data, ...props }) => {
  return (
    <PageLayout title="blog">
      <h1>Blog</h1>
      {data.allMdx.edges.map((edge: any) => {
        return (
          <div style={{ marginBottom: 20 }}>
            <h3>
              <Link to={`/blog${edge.node.fields.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </h3>
            <p>{edge.node.frontmatter.date}</p>
            <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}></p>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
