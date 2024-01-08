import { Box, BoxProps } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props extends BoxProps {
  children: ReactNode
}

export const Content: FC<Props> = ({ children, ...props }) => {
  return (
    <Box component='main' {...props}>
      {children}
    </Box>
  )
}
