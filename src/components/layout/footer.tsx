import {
  Container,
  Group,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core'
import {
  IconBrandGithubFilled,
  IconBrandPaypalFilled,
  IconBrandWhatsappFilled,
  IconCode,
  IconHeartFilled,
  type IconProps
} from '@tabler/icons-react'
import Link from 'next/link'
import type { FC } from 'react'
import { FooterLogo } from '../logos'

import classes from './base.layout.module.css'

const footerMenu: Array<{ label: string; href: string }> = [
  {
    label: 'Impressum',
    href: '/impressum'
  },
  {
    label: 'Colophon',
    href: '/colophon'
  },
  {
    label: 'Data privacy',
    href: '/privacy'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

const socialMenu: Array<{
  label: string
  href: string
  icon: FC<IconProps>
}> = [
  {
    label: 'Github',
    href: 'https://github.com/dreitagebart',
    icon: IconBrandGithubFilled
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/4916090469717',
    icon: IconBrandWhatsappFilled
  },
  {
    label: 'PayPal',
    href: 'https://paypal.me/sbuechold',
    icon: IconBrandPaypalFilled
  }
]

export const Footer = () => {
  const theme = useMantineTheme()

  return (
    <footer className={classes.footer}>
      <Container size='xl' className={classes.footerContainer}>
        <Stack gap='xl'>
          <Group justify='space-between'>
            <FooterLogo />
            <Group>
              {footerMenu.map(({ label, href }) => {
                return (
                  <UnstyledButton key={label} component={Link} href={href}>
                    <Text size='sm' c='brand.0'>
                      {label}
                    </Text>
                  </UnstyledButton>
                )
              })}
            </Group>
          </Group>
          <Group justify='space-between'>
            <Group>
              {socialMenu.map(({ label, href, icon: Icon }) => {
                return (
                  <Tooltip key={label} label={label}>
                    <UnstyledButton
                      component={Link}
                      href={href}
                      target='_blank'>
                      <Group gap='xs'>
                        <Icon color={theme.colors.brand[0]} />
                        <Text size='xs' lts={1} c={theme.colors.brand[0]}>
                          {label}
                        </Text>
                      </Group>
                    </UnstyledButton>
                  </Tooltip>
                )
              })}
            </Group>
            <Group gap='xs'>
              <IconCode className={classes.tada} />
              <Text size='xs'>with</Text>
              <IconHeartFilled className={classes.pulse} color='#ff000050' />
              <Text size='xs'>in</Text>
              <Text size='xs' tt='uppercase' lts={1} fw='bold'>
                Schwäbisch Hall
              </Text>
            </Group>
          </Group>
        </Stack>
      </Container>
    </footer>
  )
}
