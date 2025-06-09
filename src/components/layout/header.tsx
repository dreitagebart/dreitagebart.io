import {
  AppShellHeader,
  Burger,
  Button,
  Container,
  Group,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Text,
  darken
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconChevronDown, IconLogout } from '@tabler/icons-react'
import { signOut, useSession } from 'next-auth/react'
import type { FC } from 'react'

import { useRouter } from 'next/navigation'
import classes from './base.layout.module.css'

type Props = { toggle: () => void }

export const Header: FC<Props> = ({ toggle }) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <AppShellHeader>
      <Container
        size='xl'
        className={classes.headerContainer}
        styles={{
          root:
            scroll.y > 100
              ? {
                  transition: 'all 400ms ease-in-out',
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  backdropFilter: 'blur(10px)',
                  borderBottom:
                    '1px solid var(--mantine-color-brand-light-hover)',
                  borderLeft:
                    '1px solid var(--mantine-color-brand-light-hover)',
                  borderRight:
                    '1px solid var(--mantine-color-brand-light-hover)',
                  // backgroundColor: '#000000',
                  background: darken(
                    'var(--mantine-color-brand-light-hover)',
                    0.6
                  )
                }
              : {
                  transition: 'all 400ms ease-in-out',
                  borderBottom: '1px solid transparent',
                  borderLeft: '1px solid transparent',
                  borderRight: '1px solid transparent'
                }
        }}>
        <Group className={classes.headerGroup}>
          <Burger onClick={toggle} hiddenFrom='sm' />
          <Menu position='bottom-end' width={240} withinPortal>
            <MenuTarget>
              <Button variant='light' rightSection={<IconChevronDown />}>
                {session?.user?.email}
              </Button>
            </MenuTarget>
            <MenuDropdown>
              <MenuLabel>
                logged in as
                <br />
                <Text fw='bold' span>
                  {session?.user?.name}
                </Text>
              </MenuLabel>
              <MenuDivider />
              <MenuItem
                ta='right'
                rightSection={<IconLogout />}
                onClick={() => {
                  signOut({ redirect: false }).then(() => {
                    router.push('/login')
                  })
                }}>
                Logout
              </MenuItem>
            </MenuDropdown>
          </Menu>
        </Group>
      </Container>
    </AppShellHeader>
  )
}
