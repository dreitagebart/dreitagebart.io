import Link from 'next/link'
import { Burger, Menu, UnstyledButton, useMantineTheme } from '@mantine/core'
import { Box, Group } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { NavbarItems } from '../../utils'
import { NavbarItem } from './NavbarItem'
import { AuthMenu } from './AuthMenu'

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
  // {
  //   label: 'Blog',
  //   href: '/blog'
  // },
  // {
  //   label: 'Things',
  //   href: '/things'
  // },
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
          <AuthMenu></AuthMenu>
        </Group>
      ) : (
        <>
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
              <Box sx={{ padding: '12px 12px 12px 24px' }}>
                <AuthMenu></AuthMenu>
              </Box>
            </Menu.Dropdown>
          </Menu>
        </>
      )}
    </Box>
  )
}
