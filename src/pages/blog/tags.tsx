import { Badge } from '@mantine/core'
import { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Layout, SEO } from '../../components'

import { getAllTags } from '../../lib/blog'

export const getStaticProps = async () => {
  return {
    props: {
      tags: getAllTags()
    }
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tags
}) => {
  return (
    <Layout title='Tags'>
      <SEO
        openGraph={{
          siteName: 'dreitagebart.io',
          title: 'Contact',
          description: 'This is a simple demo site',
          url: 'https://dreitagebart.io/selfexplained'
        }}
      ></SEO>
      {tags.map((tag) => {
        return (
          <Link key={tag} href={`/blog/tag/${tag}`}>
            <Badge>{tag}</Badge>
          </Link>
        )
      })}
    </Layout>
  )
}

export default Page
