import Head from 'next/head'
import { Box, createStyles } from '@mantine/core'
import { FC, ReactNode } from 'react'

import { ScrollToTop } from '../Utils'
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import { OpenGraph } from '../../utils'

interface Props {
  title: string
  children: ReactNode
  description?: string
  keywords?: Array<string>
  openGraph?: OpenGraph
}

const useStyles = createStyles((theme) => ({
  container: {
    position: 'relative',
    minHeight: '100vh'
  },
  wrapper: {
    paddingBottom: 300
  },
  header: {},
  content: {},
  footer: {
    color: theme.colors.gray[0],
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.colors.spin[9]
        : theme.colors.spin[8],
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 260
  }
}))

export const Layout: FC<Props> = ({
  title,
  children,
  openGraph,
  description,
  keywords
}) => {
  const { classes } = useStyles()

  return (
    <>
      <Head>
        <title>{`${title} // dreitagebart.io`}</title>
        {description && <meta name='description' content={description}></meta>}
        {keywords && (
          <meta name='description' content={keywords.join(', ')}></meta>
        )}
        {openGraph?.title && (
          <meta property='og:title' content={openGraph.title}></meta>
        )}
        {openGraph?.description && (
          <meta
            property='og:description'
            content={openGraph.description}
          ></meta>
        )}
        {openGraph?.image && (
          <meta property='og:image' content={openGraph.image}></meta>
        )}
        {openGraph?.url && (
          <meta property='og:url' content={openGraph.url}></meta>
        )}
        {openGraph?.type && (
          <meta property='og:type' content={openGraph.type}></meta>
        )}
        {openGraph?.locale && (
          <meta property='og:locale' content={openGraph.locale}></meta>
        )}
        {openGraph?.siteName && (
          <meta property='og:site_name' content={openGraph.siteName}></meta>
        )}
      </Head>
      <Box className={classes.container}>
        <Box className={classes.wrapper}>
          <Header className={classes.header}></Header>
          <Content className={classes.content}>{children}</Content>
        </Box>
        <Footer className={classes.footer}></Footer>
      </Box>
      <ScrollToTop></ScrollToTop>
    </>
  )
}
