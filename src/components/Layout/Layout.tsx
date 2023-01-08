import { Box, createStyles } from '@mantine/core'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { ScrollToTop } from '../Utils'

import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

interface Props {
  title: string
  children: ReactNode
}

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    minHeight: '100vh'
  },
  wrapper: {
    paddingBottom: 300
  },
  footer: {
    color: theme.colors.gray[0],
    backgroundColor: theme.colors.brand[9],
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 260
  }
}))

export const Layout: FC<Props> = ({ title, children }) => {
  const { classes } = useStyles()

  return (
    <>
      <Head>
        <title>{`${title} // dreitagebart.io`}</title>
      </Head>
      <Box className={classes.container}>
        <Box className={classes.wrapper}>
          <Header></Header>
          <Content>{children}</Content>
        </Box>
        <Footer className={classes.footer}></Footer>
      </Box>
      <ScrollToTop></ScrollToTop>
    </>
  )
}
