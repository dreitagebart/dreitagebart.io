import { Text } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'

import { Layout, Pod } from '../../components'

const Page: FC<NextPage> = () => {
  return (
    <Layout title='Blog'>
      <Pod>
        <Text>Here you can find all blog posts</Text>
      </Pod>
    </Layout>
  )
}

export default Page
