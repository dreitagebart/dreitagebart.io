import { NextPage } from 'next'

import { Layout, PageTitle, Pod } from '../components'

const Page: NextPage = () => {
  return (
    <Layout title='Impressum'>
      <Pod>
        <PageTitle>Impressum</PageTitle>
      </Pod>
    </Layout>
  )
}

export default Page
