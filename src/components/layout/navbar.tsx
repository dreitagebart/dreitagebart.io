import {
  AppShellNavbar,
  AppShellSection,
  Burger,
  Group,
  Stack,
  Transition,
  UnstyledButton
} from '@mantine/core'
import Link from 'next/link'
import { type FC, useEffect, useState } from 'react'
import { DreitagebartLogo } from '../logos'
import { WiresLeft } from './wires'

type Props = {
  toggle: () => void
}

const menu: Array<{ label: string; href: string }> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Passion',
    href: '/passion'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'FAQs',
    href: '/faqs'
  },

  {
    label: 'Contact',
    href: '/contact'
  }
]

export const Navbar: FC<Props> = ({ toggle }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => setVisible(true), [])

  return (
    <>
      <AppShellNavbar hiddenFrom='sm' bg='#000000'>
        <AppShellSection p='xl'>
          <Group>
            <Burger onClick={toggle} />
            <UnstyledButton component={Link} href='/'>
              <DreitagebartLogo />
            </UnstyledButton>
          </Group>
          <Stack gap='xl' my='xl'>
            {menu.map((item) => {
              return (
                <UnstyledButton
                  key={item.href}
                  component={Link}
                  href={item.href}
                  onClick={toggle}
                  fz='h4'>
                  {item.label}
                </UnstyledButton>
              )
            })}
          </Stack>
        </AppShellSection>
      </AppShellNavbar>
      <AppShellNavbar visibleFrom='sm'>
        <WiresLeft />
        <AppShellSection p='xl'>
          <UnstyledButton component={Link} href='/'>
            <DreitagebartLogo />
          </UnstyledButton>
          <Transition
            mounted={visible}
            transition='slide-right'
            duration={800}
            timingFunction='ease-in-out'
            enterDelay={400}>
            {(styles) => (
              <div style={styles}>
                <Stack gap='xl' my='xl'>
                  {menu.map((item) => {
                    return (
                      <UnstyledButton
                        key={item.href}
                        component={Link}
                        href={item.href}>
                        {item.label}
                      </UnstyledButton>
                    )
                  })}
                </Stack>
              </div>
            )}
          </Transition>
        </AppShellSection>
      </AppShellNavbar>
    </>
  )
}
