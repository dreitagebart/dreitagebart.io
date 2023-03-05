import Link from 'next/link'
import { Badge, MantineSize } from '@mantine/core'
import { FC } from 'react'

interface Props {
  size?: MantineSize
  children: string
}

export const Tag: FC<Props> = ({ children, size = 'sm' }) => {
  return (
    <Link href={`/blog/tag/${children}`}>
      <Badge size={size} radius='sm' color='cyan' variant='filled'>
        {children}
      </Badge>
    </Link>
  )
}
