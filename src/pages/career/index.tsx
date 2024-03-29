import { Center, Loader } from '@mantine/core'
import { NextPage } from 'next'

import { Layout, PageTitle, Pod, SubTitle } from '../../components'
import { useRestrictedArea } from '../../hooks'

const Page: NextPage = () => {
  const { user, loading } = useRestrictedArea('career')

  return (
    <Layout title='Welcome'>
      <Pod>
        {loading ? (
          <Center px='xl'>
            <Loader size='xl'></Loader>
          </Center>
        ) : (
          <>
            <PageTitle>{user?.name}</PageTitle>
            <SubTitle>
              I say a warm welcome!
              <br />
              Please click the upper right menu button to navigate through
              exclusive content
            </SubTitle>
          </>
        )}
      </Pod>
    </Layout>
  )
}

export default Page
