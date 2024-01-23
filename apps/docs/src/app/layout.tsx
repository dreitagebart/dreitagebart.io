import '@mantine/core/styles.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'


interface Props {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Docs',
  description: 'Created by dreitagebart'
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}

export default Layout
