import { Group, SimpleGrid, Text, Title } from '@mantine/core'
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import {
  ArticleCard,
  Layout,
  PageTitle,
  Pod,
  SEO,
  Tag
} from '../../../components'
import { getAllTags, getPostsByTag } from '../../../lib/blog'

export const getStaticPaths = async () => {
  const tags = getAllTags()

  return {
    paths: tags.map((tag) => {
      return {
        params: { tag }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<{ tag: string }>) => {
  if (!params) {
    return {
      notFound: true
    }
  }

  const posts = getPostsByTag(params.tag)

  return {
    props: {
      tag: params.tag,
      posts
    }
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tag,
  posts
}) => {
  return (
    <Layout title='Blog'>
      <SEO
        openGraph={{
          siteName: 'dreitagebart.io',
          title: 'Contact',
          description: 'This is a simple demo site',
          url: 'https://dreitagebart.io/selfexplained'
        }}
      ></SEO>
      <Pod>
        <PageTitle>Tag {tag}</PageTitle>
      </Pod>
      <Pod mt='xl'>
        <SimpleGrid cols={2} spacing='xl' verticalSpacing='xl'>
          {posts.map((post) => {
            return <ArticleCard post={post} key={post.slug}></ArticleCard>
          })}
        </SimpleGrid>
      </Pod>
    </Layout>
  )
}

export default Page
