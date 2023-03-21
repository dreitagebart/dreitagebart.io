import Link from 'next/link'
import {
  Avatar,
  Burger,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core'
import { Box, Group } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { NavbarItems } from '../../utils'
import { NavbarItem } from './NavbarItem'
import {
  ActivityHeartbeat,
  Briefcase,
  ChartTreemap,
  Logout
} from 'tabler-icons-react'

interface Props {}

const items: NavbarItems = [
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'FAQs',
    href: '/faqs'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Things',
    href: '/things'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

export const Navbar: FC<Props> = () => {
  const router = useRouter()
  const theme = useMantineTheme()
  const largeScreen = useMediaQuery('(min-width: 48em)', true, {
    getInitialValueInEffect: false
  })
  const [opened, { toggle }] = useDisclosure(false)
  const label = opened ? 'Close navigation' : 'Open navigation'
  const { data: session, status } = useSession()

  return (
    <Box component='nav'>
      {largeScreen ? (
        <Group spacing={24}>
          {items.map(({ label, href }) => {
            return (
              <NavbarItem
                key={href}
                href={href}
                active={router.asPath.startsWith(href)}
              >
                {label}
              </NavbarItem>
            )
          })}
          {status === 'authenticated' ? (
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
                <Menu.Item icon={<Briefcase></Briefcase>}>
                  <UnstyledButton
                    component={Link}
                    href={`/${session.user?.username}/work`}
                  >
                    <Text>Work</Text>
                  </UnstyledButton>
                </Menu.Item>
                <Menu.Divider></Menu.Divider>
                <Menu.Item icon={<Logout></Logout>} onClick={() => signOut()}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : null}
        </Group>
      ) : (
        <Menu
          withinPortal
          width='100vw'
          onClose={toggle}
          position='bottom'
          styles={{
            dropdown: {
              backgroundColor:
                theme.colorScheme === 'light'
                  ? theme.colors.spin[2]
                  : theme.colors.spin[8],
              boxShadow: 'none',
              marginTop: 8,
              paddingBottom: 20,
              border: 'none'
            },
            item: {
              paddingLeft: theme.spacing.xl,
              paddingTop: 12,
              paddingBottom: 12,
              fontSize: '1.2rem',
              background: 'transparent'
            }
          }}
        >
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} aria-label={label} />
          </Menu.Target>
          <Menu.Dropdown>
            {items.map(({ label, href }) => {
              return (
                <Menu.Item key={label}>
                  <Link href={href}>
                    <UnstyledButton>{label}</UnstyledButton>
                  </Link>
                </Menu.Item>
              )
            })}
          </Menu.Dropdown>
        </Menu>
      )}
    </Box>
  )
}
