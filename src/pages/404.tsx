import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Center, Stack } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'
import { Home } from 'tabler-icons-react'

import error404 from '../assets/images/error404.png'
import { PageTitle, SubTitle } from '../components'

const Page: FC<NextPage> = () => {
  return (
    <>
      <Head>
        <title>Page not found // dreitagebart.io</title>
      </Head>
      <Stack>
        <Stack
          align='center'
          sx={(theme) => ({
            paddingTop: 80,
            backgroundColor:
              theme.colorScheme === 'light'
                ? theme.colors.spin[1]
                : theme.colors.spin[8]
          })}
        >
          <PageTitle>Error 404</PageTitle>
          <Image
            src={error404}
            style={{ borderRadius: '100%' }}
            alt="It's a shame"
            width={420}
            height={420}
          ></Image>
          <SubTitle w={620} ta='center' mt='xl'>
            Hmm, this should not have happened. <br></br>Looks like that page
            does not exist.
          </SubTitle>
        </Stack>
        <Center>
          <Link href='/'>
            <Button leftIcon={<Home></Home>} size='lg'>
              Go Home
            </Button>
          </Link>
        </Center>
      </Stack>
    </>
  )
}

export default Page
