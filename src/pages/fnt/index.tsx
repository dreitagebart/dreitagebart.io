import { Center, Loader } from '@mantine/core'
import { NextPage } from 'next'

import { Layout, PageTitle, Pod, SubTitle } from '../../components'
import { useRestrictedArea } from '../../hooks'

const Page: NextPage = () => {
  const { user, loading } = useRestrictedArea('fnt')

  return (
    <Layout title='Exclusive content'>
      <Pod>
        {loading ? (
          <Center px='xl'>
            <Loader size='xl'></Loader>
          </Center>
        ) : (
          <>
            <PageTitle>Portfolio</PageTitle>
            <SubTitle>
              I say a warm welcome to the employee of the company {user?.name}.
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
