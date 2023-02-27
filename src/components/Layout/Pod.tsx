import {
  Container,
  MantineStyleSystemProps,
  MantineNumberSize
} from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  size?: MantineNumberSize
  mt?: MantineStyleSystemProps['mt']
  mb?: MantineStyleSystemProps['mb']
}

export const Pod: FC<Props> = ({ mt, mb, children, size = 'xl' }) => {
  return (
    <Container size={size} mt={mt} mb={mb} px={40}>
      {children}
    </Container>
  )
}
