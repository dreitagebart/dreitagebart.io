import Link from 'next/link'
import {
  ActionIcon,
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
import { BrandLinkedin, BrandTwitter, BrandYoutube } from 'tabler-icons-react'
import { ThemeSwitch } from './ThemeSwitch'

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

const creditsLinks: Array<{
  label: string
  href: string
}> = [
  {
    label: 'Who I am',
    href: '/privacy'
  },
  {
    label: 'What I do',
    href: '/impressum'
  },
  {
    label: 'What I think',
    href: '/'
  }
]

const socialLinks: Array<{
  label: string
  icon: ReactNode
  href: string
}> = [
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: <BrandTwitter></BrandTwitter>
  },
  {
    label: 'Linked in',
    href: 'https://linkedin.com',
    icon: <BrandLinkedin></BrandLinkedin>
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: <BrandYoutube></BrandYoutube>
  }
]

export const Footer: FC<Props> = ({ ...props }) => {
  const { classes, theme } = useStyles()

  return (
    <Box component='footer' {...props}>
      <Pod>
        <Group mt='xl'>
          <Text size='lg' fw='bold'>
            Creating things that matter
          </Text>
        </Group>
        <Group mt='lg' align='flex-start' grow>
          <Stack spacing={4}>
            <Text fw='bold'>
              <Text component='span' color={theme.colors.spin[4]}>
                &#47;&#47;
              </Text>{' '}
              Credits
            </Text>
            {creditsLinks.map(({ label, href }) => {
              return (
                <Link href={href} key={href}>
                  <UnstyledButton className={classes.link}>
                    {label}
                  </UnstyledButton>
                </Link>
              )
            })}
          </Stack>
          <Stack spacing={4}>
            <Text fw='bold'>
              <Text component='span' color={theme.colors.spin[4]}>
                &#47;&#47;
              </Text>{' '}
              Connect with me
            </Text>
            <Group spacing='xs'>
              {socialLinks.map(({ label, href, icon }) => {
                return (
                  <Tooltip label={label} key={label}>
                    <ActionIcon
                      className={classes.social}
                      color='brand'
                      variant='subtle'
                      component={Link}
                      href={href}
                      rel='noreferrer'
                      target='_blank'
                    >
                      {icon}
                    </ActionIcon>
                  </Tooltip>
                )
              })}
            </Group>
            <ThemeSwitch></ThemeSwitch>
          </Stack>
          <Stack spacing={4}>
            <Text fw='bold'>
              <Text component='span' color={theme.colors.spin[4]}>
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
        </Group>
      </Pod>
    </Box>
  )
}
