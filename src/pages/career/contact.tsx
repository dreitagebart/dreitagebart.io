import { NextPage } from 'next'
import { Alert, List, Text } from '@mantine/core'

import { SubTitle } from '../../components'
import { useRestrictedArea } from '../../hooks'
import { DeviceMobile, Mail } from 'tabler-icons-react'

const Page: NextPage = () => {
  useRestrictedArea('career')

  return (
    <>
      <SubTitle>
        You can contact me in different ways, but what I most prefer is a
        telephone call.
      </SubTitle>
      <List withPadding center spacing='lg' fz='lg'>
        <List.Item icon={<DeviceMobile size={54}></DeviceMobile>}>
          0160 90 469 717
        </List.Item>
        <List.Item icon={<Mail size={54}></Mail>}>
          <a href='mailto:stefan.buechold@gmail.com'>
            stefan.buechold@gmail.com
          </a>
        </List.Item>
      </List>
      <Alert mt='lg' color='cyan'>
        <Text fz='lg'>
          I do not actively use any social media platforms, like facebook,
          instagram or tiktok...
        </Text>
      </Alert>
    </>
  )
}

export default Page
