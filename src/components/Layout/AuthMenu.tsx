import { Text, UnstyledButton } from '@mantine/core'
import { Avatar, Menu } from '@mantine/core'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import {
  ActivityHeartbeat,
  Album,
  ArrowAutofitRight,
  ChartTreemap,
  Logout,
  Stack2
} from 'tabler-icons-react'

interface Props {}

export const AuthMenu: FC<Props> = () => {
  const { data: session, status } = useSession()

  return status === 'authenticated' ? (
    <Menu
      trigger='click'
      transitionProps={{ transition: 'scale-y' }}
      position='bottom-end'
      width={240}
      withinPortal
    >
      <Menu.Target>
        <Avatar
          sx={{ cursor: 'pointer' }}
          size='md'
          src={`/companies/${session.user?.image}`}
        ></Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          logged in as <b>{session.user?.name}</b>
        </Menu.Label>
        <Menu.Item icon={<ChartTreemap></ChartTreemap>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/biography`}
          >
            <Text>Biography</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Item icon={<Album></Album>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/resume`}
          >
            <Text>Resume</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Item icon={<ActivityHeartbeat></ActivityHeartbeat>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/experience`}
          >
            <Text>Experience</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Item icon={<Stack2></Stack2>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/skills`}
          >
            <Text>Skills</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Item icon={<ArrowAutofitRight></ArrowAutofitRight>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/process`}
          >
            <Text>Process</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item icon={<Logout></Logout>} onClick={() => signOut()}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ) : null
}
