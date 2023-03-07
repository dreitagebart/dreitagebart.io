import { Text, TextProps } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props extends TextProps {
  children: string | ReactNode
}

export const SubTitle: FC<Props> = ({ children, ...props }) => {
  return (
    <Text size='lg' mb='xl' {...props}>
      {children}
    </Text>
  )
}
