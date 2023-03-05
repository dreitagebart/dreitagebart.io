import { Text } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  children: string | ReactNode
}

export const SubTitle: FC<Props> = ({ children }) => {
  return (
    <Text size='lg' mb='xl'>
      {children}
    </Text>
  )
}
