import { Text, Title } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'

import { Layout, Pod, SEO } from '../components'

const Page: FC<NextPage> = () => {
  return (
    <Layout title='Contact'>
      <SEO
        openGraph={{
          siteName: 'dreitagebart.io',
          title: 'Contact',
          description: 'This is a simple demo site',
          url: 'https://dreitagebart.io/selfexplained'
        }}
      ></SEO>
      <Pod>
        <Text>Contact</Text>
      </Pod>
    </Layout>
  )
}

export default Page
