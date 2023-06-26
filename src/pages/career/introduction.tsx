import { NextPage } from 'next'
import Image from 'next/image'

import qrcode from '../../assets/images/qrcode.png'
import { PageBreak, SubTitle } from '../../components'
import { useRestrictedArea } from '../../hooks'
import { Alert, Group, Stack, Text } from '@mantine/core'

const Page: NextPage = () => {
  useRestrictedArea('career')

  return (
    <>
      <SubTitle>
        Hi my name is Stefan. I am a multi-talented Software Developer from
        Germany. I am glad that you are interested in my person, my experiences
        and skills. This document gives you an overview of all what you need to
        know about me.
      </SubTitle>
      <Alert mt='xl' color='blue' title={<Text fz='xl'>Did you know?</Text>}>
        <Text fz='lg'>
          This is the printable &quot;hand-out version&quot;, but you can check
          the online version at{' '}
          <b>
            <a href='https://dreitagebart.io/career'>
              https://dreitagebart.io/career
            </a>
          </b>{' '}
          or by scanning the QR code below.
        </Text>
        <Image
          style={{ margin: 20, borderRadius: 8, width: 210, height: 'auto' }}
          src={qrcode}
          alt='QR Code'
        ></Image>
        <SubTitle mt='sm'>
          <Text>You can logon with following credentials:</Text>
          <Group>
            <Stack spacing={0}>
              <Text weight={500}>Username:</Text>
              <Text weight={500}>Password:</Text>
            </Stack>
            <Stack spacing={0}>
              <Text>career</Text>
              <Text>ktbAUk</Text>
            </Stack>
          </Group>
        </SubTitle>
      </Alert>
      <PageBreak></PageBreak>
    </>
  )
}

export default Page
