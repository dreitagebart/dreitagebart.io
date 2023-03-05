import { Box, Group } from '@mantine/core'
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

  return (
    <Box component='nav'>
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
    </Box>
  )
}
