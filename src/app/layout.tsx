import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '~/styles/globals.css'
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps
} from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import type { FC, ReactNode } from 'react'
import { theme } from '~/styles/theme'

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme='dark'>
          <Notifications autoClose={8000} />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout
