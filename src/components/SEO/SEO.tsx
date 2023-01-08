import Head from 'next/head'
import { FC } from 'react'

import { OpenGraph } from '../../types'

interface Props {
  description?: string
  keywords?: Array<string>
  openGraph?: OpenGraph
}

export const SEO: FC<Props> = ({
  description,
  keywords,
  openGraph = { locale: 'de' }
}) => {
  return (
    <Head>
      {description && <meta name='description' content={description}></meta>}
      {keywords && (
        <meta name='description' content={keywords.join(', ')}></meta>
      )}
      {openGraph.title && (
        <meta property='og:title' content={openGraph.title}></meta>
      )}
      {openGraph.description && (
        <meta property='og:description' content={openGraph.description}></meta>
      )}
      {openGraph.url && <meta property='og:url' content={openGraph.url}></meta>}
      {openGraph.type && (
        <meta property='og:type' content={openGraph.type}></meta>
      )}
      {openGraph.locale && (
        <meta property='og:locale' content={openGraph.locale}></meta>
      )}
      {openGraph.siteName && (
        <meta property='og:site_name' content={openGraph.siteName}></meta>
      )}
    </Head>
  )
}
