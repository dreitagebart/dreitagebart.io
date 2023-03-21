import { Button, Center, Group, Loader } from '@mantine/core'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { Layout, PageTitle, Pod, SubTitle } from '../../components'
import { useFNT } from '../../hooks'

const Page: FC<NextPage> = () => {
  const router = useRouter()
  const { user, status } = useFNT()

  return (
    <Layout title='Exclusive content'>
      <Pod>
        {status === 'loading' ? (
          <Center px='xl'>
            <Loader size='xl'></Loader>
          </Center>
        ) : status === 'authenticated' ? (
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
