import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Center, createStyles, rem, Stack } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'
import { Home } from 'tabler-icons-react'

import error404 from '../assets/images/error404.png'
import { PageTitle, Pod, SubTitle } from '../components'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.colors.spin[1]
        : theme.colors.spin[8]
  },
  image: {
    width: rem(420),
    height: 'auto',
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      width: rem(210)
    }
  },
  text: {
    // width: rem(620),
    textAlign: 'center',
    marginTop: theme.spacing.xl,
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: rem(18)
    }
  }
}))

const Page: FC<NextPage> = () => {
  const { classes } = useStyles()

  return (
    <>
      <Head>
        <title>Page not found / dreitagebart.io</title>
      </Head>
      <Stack>
        <Stack align='center' className={classes.wrapper}>
          <PageTitle>Error 404</PageTitle>
          <Image
            src={error404}
            style={{ borderRadius: '100%' }}
            alt="It's a shame"
            className={classes.image}
          ></Image>
          <Pod size='sm'>
            <SubTitle className={classes.text}>
              Hmm, this should not have happened. <br></br>Looks like that page
              does not exist.
            </SubTitle>
          </Pod>
        </Stack>
        <Center mb={40}>
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
