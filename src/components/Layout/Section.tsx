import { Box, BoxProps } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props extends BoxProps {
  children: ReactNode
}

export const Section: FC<Props> = ({ children, ...props }) => {
  return (
    <Box component='section' {...props}>
      {children}
    </Box>
  )
}
