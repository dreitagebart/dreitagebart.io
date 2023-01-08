import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import { FC } from 'react'

import { theme } from '../styles/theme'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>dreitagebart.io</title>
        <meta charSet='utf-8'></meta>
        <meta
          name='author'
          content='dreitagebart <https://dreitagebart.io>'
        ></meta>
        <meta
          name='description'
          content='This is the official website of dreitagebart'
        ></meta>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps}></Component>
      </MantineProvider>
    </>
  )
}

export default App
