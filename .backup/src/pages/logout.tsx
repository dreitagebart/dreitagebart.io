import { Text } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'

import { Layout, Pod } from '../components'

const Page: FC<NextPage> = () => {
  return (
    <Layout title='Logout'>
      <Pod>
        <Text>You are logged out</Text>
      </Pod>
    </Layout>
  )
}

export default Page
