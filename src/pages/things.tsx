import { Text } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'

import { Layout, PageTitle, Pod, SEO, SubTitle } from '../components'

const Page: FC<NextPage> = () => {
  return (
    <Layout title='Things'>
      <SEO
        openGraph={{
          siteName: 'dreitagebart.io',
          title: 'Things',
          description: 'This is a simple demo site',
          url: 'https://dreitagebart.io/selfexplained'
        }}
      ></SEO>
      <Pod>
        <PageTitle>Things</PageTitle>
        <SubTitle>Things around the web</SubTitle>
      </Pod>
    </Layout>
  )
}

export default Page
