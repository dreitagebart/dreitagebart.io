'use client'

import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { FC, ReactNode } from 'react'
import { Header } from './header'
import { Main } from './main'
import { Navbar } from './navbar'

type Props = {
  children: ReactNode
}

export const BaseLayout: FC<Props> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <AppShell
      layout='alt'
      header={{
        height: 100,
        offset: false
      }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: {
          mobile: !opened
        }
      }}>
      <Header toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main>{children}</Main>
    </AppShell>
  )
}
