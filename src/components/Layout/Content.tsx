import { Box } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Content: FC<Props> = ({ children }) => {
  return <Box component='main'>{children}</Box>
}
