import { NextPage } from 'next'

import { Layout, PageTitle, Pod, SubTitle } from '../../components'

const Page: NextPage = () => {
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
