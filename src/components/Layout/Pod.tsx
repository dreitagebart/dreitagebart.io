import {
  Container,
  MantineStyleSystemProps,
  MantineNumberSize
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  size?: MantineNumberSize
  mt?: MantineStyleSystemProps['mt']
  mb?: MantineStyleSystemProps['mb']
}

export const Pod: FC<Props> = ({ mt, mb, children, size = 'xl' }) => {
  const largeScreen = useMediaQuery('(min-width: 48em)', true, {
    getInitialValueInEffect: false
  })

  return (
    <Container size={size} mt={mt} mb={mb} px={largeScreen ? 40 : 20}>
      {children}
    </Container>
  )
}
