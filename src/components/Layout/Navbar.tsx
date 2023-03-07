import { Burger, Menu, UnstyledButton, useMantineTheme } from '@mantine/core'
import { Box, Group } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { NavbarItems } from '../../utils'
import { NavbarItem } from './NavbarItem'

interface Props {}

const items: NavbarItems = [
  {
    label: 'About',
    href: '/about'
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
  const largeScreen = useMediaQuery('(min-width: 48em)')
  const [opened, { toggle }] = useDisclosure(false)
  const label = opened ? 'Close navigation' : 'Open navigation'

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
