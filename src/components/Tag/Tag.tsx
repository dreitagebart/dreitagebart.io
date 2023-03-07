import Link from 'next/link'
import { Badge, MantineSize } from '@mantine/core'
import { FC } from 'react'

interface Props {
  link?: boolean
  size?: MantineSize
  children: string
}

export const Tag: FC<Props> = ({ children, link = false, size = 'sm' }) => {
  const inner = (
    <Badge size={size} radius='sm' color='cyan' variant='filled'>
      {children}
    </Badge>
  )

  return link ? <Link href={`/blog/tag/${children}`}>{inner}</Link> : inner
}
