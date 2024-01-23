import '@mantine/core/styles.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  MantineProvider
} from '@mantine/core'
import { Footer } from '@components/footer'
import { Header } from '@components/header'
import { theme } from '@utils/theme'

interface Props {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dreitagebart.io ~ creating things that matter',
  description: 'Created by dreitagebart'
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 80 }}
            footer={{ height: 240, offset: true }}
          >
            <AppShellHeader>
              <Header></Header>
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
            <AppShellFooter>
              <Footer></Footer>
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}

export default Layout
