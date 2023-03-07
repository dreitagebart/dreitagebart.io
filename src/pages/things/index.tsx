import { NextPage } from 'next'
import { FC } from 'react'

import { Layout, PageTitle, Pod, SubTitle } from '../../components'

const Page: FC<NextPage> = () => {
  return (
    <Layout title='Things'>
      <Pod>
        <PageTitle>Things</PageTitle>
        <SubTitle>Things around the web</SubTitle>
      </Pod>
    </Layout>
  )
}

export default Page
