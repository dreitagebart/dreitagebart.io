import { Center, Loader } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'

import { Layout, PageTitle, Pod, SubTitle } from '../../components'
import { useRestrictedArea } from '../../hooks'

const Page: FC<NextPage> = () => {
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
              Please click the upper right menu button to navigate through the
              exclusive content
            </SubTitle>
            {/* <Group>
              <Button
                size='xl'
                variant='gradient'
                component={Link}
                href={`/${user?.name}`}
              >
                Access content
              </Button>
            </Group> */}
          </>
        ) : null}
      </Pod>
    </Layout>
  )
}

export default Page
