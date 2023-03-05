import dayjs from 'dayjs'
import Link from 'next/link'
import codeDark from 'prism-react-renderer/themes/vsDark'
import codeLight from 'prism-react-renderer/themes/vsLight'
import { Blockquote, Code, Text } from '@mantine/core'
import { useMemo } from 'react'
import { Calendar, Tags } from 'tabler-icons-react'
import { Badge } from '@mantine/core'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Group, Stack, Title, Tooltip } from '@mantine/core'
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { Heading, Layout, PageTitle, Pod, SEO, Tldr } from '../../components'
import { getAllPosts, getPostBySlug } from '../../lib/blog'
import { Prism } from '@mantine/prism'

export const getStaticPaths = async () => {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<{ slug: string }>) => {
  if (!params) {
    return {
      notFound: true
    }
  }

  const post = getPostBySlug(params.slug)

  return {
    props: {
      post: { ...post, content: await serialize(post.content) }
    }
  }
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post
}) => {
  const relativeDate = useMemo(() => dayjs(post.date).fromNow(), [post.date])
  const readableDate = useMemo(
    () => dayjs(post.date).format('MMMM D, YYYY'),
    [post.date]
  )

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
        <PageTitle>{post.title}</PageTitle>
        <Stack spacing={4}>
          <Group position='apart'>
            <Group spacing={6}>
              <Calendar size={18}></Calendar>
              <Tooltip position='bottom' label={relativeDate}>
                <Text component='div' size='xs' color='dimmed'>
                  created {readableDate}
                </Text>
              </Tooltip>
            </Group>
            <Group spacing={6}>
              <Tags></Tags>{' '}
              <Group spacing={4}>
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <Badge radius='sm' variant='filled'>
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </Group>
            </Group>
          </Group>
        </Stack>
        <MDXRemote
          components={{
            h1: ({ ref, ...props }) => (
              <Title mt='xl' order={1} {...props}></Title>
            ),
            h2: ({ ref, ...props }) => (
              <Title mt='xl' order={2} {...props}></Title>
            ),
            h3: ({ ref, ...props }) => (
              <Title mt='xl' order={3} {...props}></Title>
            ),
            h4: ({ ref, ...props }) => (
              <Title mt='xl' order={4} {...props}></Title>
            ),
            h5: ({ ref, ...props }) => (
              <Title mt='xl' order={5} {...props}></Title>
            ),
            h6: ({ ref, ...props }) => (
              <Title mt='xl' order={6} {...props}></Title>
            ),
            Heading: (props) => <Heading {...props}></Heading>,
            Blockquote: ({ ref, ...props }) => (
              <Blockquote {...props}></Blockquote>
            ),
            blockquote: ({ ref, ...props }) => (
              <Blockquote {...props}></Blockquote>
            ),
            Tldr: (props) => <Tldr {...props}></Tldr>,
            Prism: (props) => (
              <Prism
                my='xl'
                radius='md'
                getPrismTheme={(_theme, colorScheme) =>
                  colorScheme === 'light' ? codeLight : codeDark
                }
                {...props}
              ></Prism>
            ),
            Code: (props) => <Code {...props}></Code>,
            p: (props) => (
              <Text size='1.2rem' lh={1.6}>
                {props.children}
              </Text>
            )
          }}
          {...post.content}
        ></MDXRemote>
      </Pod>
    </Layout>
  )
}

export default Page
