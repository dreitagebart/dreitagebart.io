import { NextPage } from 'next'
import { FC } from 'react'

import { Layout, PageTitle, Pod } from '../components'

const Page: FC<NextPage> = () => {
  return (
    <Layout title='Impressum'>
      <Pod>
        <PageTitle>Impressum</PageTitle>
      </Pod>
    </Layout>
  )
}

export default Page
