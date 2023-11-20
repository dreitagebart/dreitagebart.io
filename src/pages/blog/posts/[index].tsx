import { Group, Pagination, SimpleGrid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { IconTags } from "@tabler/icons-react";

import {
  ArticleCard,
  Layout,
  PageTitle,
  Pod,
  Tag,
  SubTitle,
} from "../../../components";
import { getAllPosts, getAllTags } from "../../../lib/blog";
import { config } from "../../../utils";

export const getStaticPaths: GetStaticPaths = async () => {
  const numPages = (config.postsPerPage % getAllPosts().length) + 1;

  const paths = [...Array(numPages)].map((v, i) => {
    return {
      params: { index: (i + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ index: string }>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { index } = params;

  const posts = getAllPosts();

  const pageIndex = parseInt(index) - 1;
  const startIndex = pageIndex * config.postsPerPage;
  const endIndex = (pageIndex + 1) * config.postsPerPage;

  const numPages = (posts.length % config.postsPerPage) + 1;

  return {
    props: {
      tags: getAllTags(),
      posts: posts.slice(startIndex, endIndex),
      pageIndex,
      numPages,
    },
  };
};

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tags,
  posts,
  pageIndex,
  numPages,
}) => {
  const router = useRouter();
  const largeScreen = useMediaQuery("(min-width: 48em)", true, {
    getInitialValueInEffect: false,
  });

  return (
    <Layout title="Blog">
      <Pod>
        <PageTitle>Blog</PageTitle>
        <SubTitle>
          In my blog section, you will find articles and thoughts on the topics
          that inspire me. Here, I share my passion for creativity, design,
          technology and more.
        </SubTitle>
        <Group my="xl">
          <Group spacing={4}>
            <IconTags></IconTags>
            <Text>Tags</Text>
          </Group>
          {tags.map((tag) => {
            return (
              <Tag key={tag} size="lg" link>
                {tag}
              </Tag>
            );
          })}
        </Group>
      </Pod>
      <Pod mt="xl">
        <SimpleGrid
          cols={largeScreen ? 2 : 1}
          spacing={48}
          verticalSpacing={48}
        >
          {posts.map((post) => {
            return <ArticleCard post={post} key={post.slug}></ArticleCard>;
          })}
        </SimpleGrid>
      </Pod>
      <Pod mt="xl">
        <Pagination
          defaultValue={pageIndex + 1}
          onChange={(p) => router.push(`/blog/posts/${p}`)}
          total={numPages}
        />
      </Pod>
    </Layout>
  );
};

export default Page;
