import { Container } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const ResponsiveContainer: FC<Props> = ({ children }) => {
  return (
    <Container size='xl' px='xl'>
      {children}
    </Container>
  )
}
