import {
  ActionIcon,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
  rem
} from '@mantine/core'
import Link from 'next/link'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { FC } from 'react'
import { ResponsiveContainer } from '@components/containers'

interface Props {}

export const Footer: FC<Props> = () => {
  return (
    <>
      <ResponsiveContainer>
        <Flex justify='space-between'>
          <Stack>
            <Title>dreitagebart</Title>
            <Text>creating things that matter</Text>
            <Group>
              <Tooltip label='Github'>
                <ActionIcon
                  size={40}
                  variant='light'
                  component={Link}
                  href='https://github.com/dreitagebart'
                  target='_blank'
                >
                  <IconBrandGithub size={36}></IconBrandGithub>
                </ActionIcon>
              </Tooltip>
              <Tooltip label='LinkedIn'>
                <ActionIcon
                  size={40}
                  variant='light'
                  component={Link}
                  href='https://linkedin.com/in/dreitagebart'
                  target='_blank'
                >
                  <IconBrandLinkedin size={36}></IconBrandLinkedin>
                </ActionIcon>
              </Tooltip>
              <Tooltip label='Github'>
                <ActionIcon
                  size={40}
                  variant='light'
                  component={Link}
                  href='https://github.com/dreitagebart'
                  target='_blank'
                >
                  <IconBrandGithub size={36}></IconBrandGithub>
                </ActionIcon>
              </Tooltip>
            </Group>
          </Stack>
          <Flex direction='column' justify='space-between'>
            <Stack>
              <Title order={4}>Contact</Title>
              <UnstyledButton component={Link} href='/emailme'>
                eMail me
              </UnstyledButton>
              <UnstyledButton>Call me</UnstyledButton>
              <UnstyledButton>Office hours</UnstyledButton>
              <UnstyledButton>https://kentcdodds.com/credits</UnstyledButton>
            </Stack>
            <Stack>
              <Title order={4}>General</Title>
              <UnstyledButton>My mission</UnstyledButton>
              <UnstyledButton>Privacy policy</UnstyledButton>
              <UnstyledButton>Terms of use</UnstyledButton>
              <UnstyledButton>Code of conduct</UnstyledButton>
            </Stack>
          </Flex>
          <Stack>
            <Title order={4}>Sitemap</Title>
            <UnstyledButton>Home</UnstyledButton>
            <UnstyledButton>Blog</UnstyledButton>
            <UnstyledButton>Courses</UnstyledButton>
            <UnstyledButton>Discord</UnstyledButton>
            <UnstyledButton>Chats Podcast</UnstyledButton>
            <UnstyledButton>Workshops</UnstyledButton>
            <UnstyledButton>About</UnstyledButton>
            <UnstyledButton>Credits</UnstyledButton>
            <UnstyledButton>Sitemap.xml</UnstyledButton>
          </Stack>
        </Flex>
        <Flex my={rem(40)} justify='space-between'>
          <Text>All rights reserved &copy; dreitagebart 2024</Text>
          <Text>coded with love in swabian hall</Text>
        </Flex>
      </ResponsiveContainer>
    </>
  )
}
