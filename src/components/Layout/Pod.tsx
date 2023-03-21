import { Container, MantineNumberSize, ContainerProps } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FC, ReactNode } from 'react'

interface Props extends ContainerProps {
  children: ReactNode
  size?: MantineNumberSize
}

export const Pod: FC<Props> = ({ children, size = 'xl', ...props }) => {
  const largeScreen = useMediaQuery('(min-width: 48em)', true, {
    getInitialValueInEffect: false
  })

  return (
    <Container size={size} px={largeScreen ? 40 : 20} {...props}>
      {children}
    </Container>
  )
}
