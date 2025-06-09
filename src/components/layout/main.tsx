import { AppShellMain, Container, Space } from '@mantine/core'
import type { FC, ReactNode } from 'react'
import { Footer } from './footer'
import { WiresRight } from './wires'

import classes from './base.layout.module.css'

type Props = {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <AppShellMain>
      <WiresRight />
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Container size='xl' px='xl'>
            <Space h={140} />
            {children}
          </Container>
        </div>
        <Footer />
      </div>
    </AppShellMain>
  )
}
