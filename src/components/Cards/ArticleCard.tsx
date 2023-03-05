import Link from 'next/link'
import dayjs from 'dayjs'
import { createStyles, Card, Image, Group, Text } from '@mantine/core'
import { FC, useMemo } from 'react'
import { Calendar, Tags } from 'tabler-icons-react'

import { BlogPost } from '../../utils'
import { Tag } from '../Tag'

interface Props {
  post: BlogPost
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.spin[8] : theme.white
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fontFamily
  },
  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.spin[7] : theme.colors.gray[2]
    }`
  }
}))

export const ArticleCard: FC<Props> = ({ post }) => {
  const relativeDate = useMemo(() => dayjs(post.date).fromNow(), [post.date])
  const { classes } = useStyles()

  const link = `/blog/${post.slug}`

  return (
    <Card p='xl' radius='md' className={classes.card}>
      <Card.Section mb='sm'>
        <Link href={link}>
          <Image src={post.cover.image} alt={post.cover.alt} height={180} />
        </Link>
      </Card.Section>
      <Link href={link}>
        <Text weight={700} className={classes.title} mt='xs'>
          {post.title}
        </Text>
      </Link>
      <Text>{post.excerpt}</Text>
      <Card.Section className={classes.footer}>
        <Group position='apart'>
          <Group spacing={6}>
            <Calendar size={18}></Calendar>
            <Text size='xs' color='dimmed'>
              {relativeDate}
            </Text>
          </Group>
          <Group spacing={6}>
            <Tags></Tags>{' '}
            <Group spacing={4}>
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Group>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
