import Link from 'next/link'
import {
  Box,
  BoxProps,
  createStyles,
  Group,
  Stack,
  Text,
  UnstyledButton,
  Tooltip
} from '@mantine/core'

import { FC, ReactNode } from 'react'
import { Pod } from './Pod'
import { BrandGithub, BrandLinkedin, BrandTwitter } from 'tabler-icons-react'
import { ThemeSwitch } from './ThemeSwitch'
import { handwritingFont } from '../../styles/theme'

interface Props extends BoxProps {}

const useStyles = createStyles((theme) => ({
  link: {
    transition: 'all 500ms ease-out',
    color: theme.colors.gray[6],
    ':hover': {
      color: theme.colors.gray[0]
    }
  },
  social: {
    transition: 'all 500ms ease-out',
    ':hover': {
      background: theme.colors.spin[8]
    }
  }
}))

const footerLinks: Array<{
  label: string
  href: string
}> = [
  {
    label: 'Privacy policy',
    href: '/privacy'
  },
  {
    label: 'Impressum',
    href: '/impressum'
  }
]

// const creditsLinks: Array<{
//   label: string
//   href: string
// }> = [
//   {
//     label: 'Who I am',
//     href: '/about#who-i-am'
//   },
//   {
//     label: 'What I do',
//     href: '/about#what-i-do'
//   },
//   {
//     label: 'What I think',
//     href: '/about#what-i-think'
//   }
// ]

const socialLinks: Array<{
  label: string
  icon: ReactNode
  href: string
}> = [
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: <BrandTwitter size={32}></BrandTwitter>
  },
  {
    label: 'Linked in',
    href: 'https://linkedin.com',
    icon: <BrandLinkedin size={32}></BrandLinkedin>
  },
  {
    label: 'Github',
    href: 'https://github.com/dreitagebart',
    icon: <BrandGithub size={32}></BrandGithub>
  }
]

export const Footer: FC<Props> = ({ ...props }) => {
  const { classes, theme } = useStyles()

  return (
    <Box component='footer' {...props}>
      <Pod>
        <Group mt='xl' position='apart'>
          <Text size='xl' fw='bold' ff={handwritingFont.style.fontFamily}>
            Creating things that matter
          </Text>
          <ThemeSwitch></ThemeSwitch>
        </Group>
        <Group mt='lg' align='flex-start' grow>
          <Stack spacing={4}>
            <Text fw='bold'>
              <Text component='span' color={theme.colors.cyan[5]}>
                &#47;&#47;
              </Text>{' '}
              copyright 2023 dreitagebart
            </Text>
            <Group spacing='xl'>
              {footerLinks.map(({ label, href }) => {
                return (
                  <Link href={href} key={href}>
                    <UnstyledButton className={classes.link}>
                      {label}
                    </UnstyledButton>
                  </Link>
                )
              })}
            </Group>
          </Stack>
          <Stack spacing={4}>
            <Group spacing='xs'>
              {socialLinks.map(({ label, href, icon }) => {
                return (
                  <Tooltip label={label} key={label}>
                    <Link
                      className={classes.social}
                      href={href}
                      rel='noreferrer'
                      target='_blank'
                    >
                      {icon}
                    </Link>
                  </Tooltip>
                )
              })}
            </Group>
          </Stack>
        </Group>
      </Pod>
    </Box>
  )
}
