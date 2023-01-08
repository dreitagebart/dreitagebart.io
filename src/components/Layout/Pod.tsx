import { Container, MantineStyleSystemProps } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  mt?: MantineStyleSystemProps['mt']
  mb?: MantineStyleSystemProps['mb']
}

export const Pod: FC<Props> = ({ mt, mb, children }) => {
  return (
    <Container size='xl' mt={mt} mb={mb} px={40}>
      {children}
    </Container>
  )
}
