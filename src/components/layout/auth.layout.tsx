import { Flex } from '@mantine/core'
import type { FC, ReactNode } from 'react'
import { WiresLeft, WiresRight } from './wires'

type Props = {
  children: ReactNode
}

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <WiresLeft />
      <WiresRight />
      <Flex miw='100vw' mih='100vh' align='center' justify='center'>
        {children}
      </Flex>
    </>
  )
}
