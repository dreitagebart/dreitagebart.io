import { Avatar, ThemeIcon, Timeline } from '@mantine/core'
import { Center, Grid, Group, Loader, Stack, Text } from '@mantine/core'
import { NextPage } from 'next'
import Image from 'next/image'
import { FC } from 'react'
import {
  Cake,
  CurrentLocation,
  Mail,
  Phone,
  Sun,
  Video
} from 'tabler-icons-react'

import profile from '../../assets/images/profile.jpg'
import { Layout, Pod } from '../../components'
import { useFNT } from '../../hooks'

const Page: FC<NextPage> = () => {
  const { user, status } = useFNT()

  return (
    <Layout title='Resume'>
      {status === 'loading' ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : status === 'authenticated' ? (
        <Pod>
          <Grid gutter='xl'>
            <Grid.Col span={4}>
              <Stack>
                <Stack align='center'>
                  <Image
                    src={profile}
                    style={{ borderRadius: '100%', width: 180, height: 'auto' }}
                    alt='Stefan Büchold'
                  ></Image>
                </Stack>
                <Stack align='center' spacing={0}>
                  <Text
                    fz='lg'
                    fw={700}
                    sx={{ letterSpacing: 2, textTransform: 'uppercase' }}
                  >
                    Stefan Büchold
                  </Text>
                  <Text>Software Developer</Text>
                </Stack>
                <Stack>
                  <Text>
                    Ich bin ein demonstrativer Text mit Knusperfische. Wir
                    Wiener Waschweiber würden weisse Wäsche waschen, wenn wir
                    wüssten wo warmes Wasser wäre.
                  </Text>
                </Stack>
                <Stack mt='xl' spacing='sm'>
                  <Group noWrap align='flex-start'>
                    <Cake></Cake>
                    <Text span>27.11.1985 in Bad Mergentheim</Text>
                  </Group>
                  <Group noWrap align='flex-start'>
                    <Mail></Mail>
                    <Text span>stefan.buechold@gmail.com</Text>
                  </Group>
                  <Group noWrap align='flex-start'>
                    <Phone></Phone>
                    <Text span>+49 160 90 469 717</Text>
                  </Group>
                  <Group noWrap align='flex-start'>
                    <CurrentLocation></CurrentLocation>
                    <Text span>
                      Moorstraße 2/1<br></br>74523 Schwäbisch Hall
                    </Text>
                  </Group>
                </Stack>
                <Stack spacing={0}>
                  <Text span fw={700}>
                    Driving license
                  </Text>
                  <Text span>B, L, M</Text>
                </Stack>
                <Stack spacing={0}>
                  <Text fw={700}>Languages</Text>
                  <Text>German (mother tongue)</Text>
                  <Text>English, fluent in spoken and written</Text>
                  <Text>Französisch, basic</Text>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col span={8}>
              <Stack>
                <Text fz='lg' fw={700}>
                  Working experience
                </Text>
                <Timeline>
                  <Timeline.Item title='2018 - 2024' bulletSize={24}>
                    <Text color='cyan' fw={500}>
                      Forellenfilets
                    </Text>
                    <Text color='dimmed' size='sm'>
                      Default bullet without anything
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='2024 - 2028'
                    bulletSize={36}
                    bullet={
                      <Avatar
                        size={34}
                        radius='xl'
                        src='https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4'
                      />
                    }
                  >
                    <Text color='cyan' fw={500}>
                      Steaks
                    </Text>
                    <Text color='dimmed' size='sm'>
                      Timeline bullet as avatar image
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='Icon'
                    bulletSize={24}
                    bullet={<Sun size='0.8rem' />}
                  >
                    <Text color='cyan' fw={500}>
                      Enchiladas
                    </Text>
                    <Text color='dimmed' size='sm'>
                      Timeline bullet as icon
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='ThemeIcon'
                    bulletSize={24}
                    bullet={
                      <ThemeIcon
                        size={22}
                        variant='gradient'
                        gradient={{ from: 'lime', to: 'cyan' }}
                        radius='xl'
                      >
                        <Video size='0.8rem' />
                      </ThemeIcon>
                    }
                  >
                    <Text color='cyan' fw={500}>
                      Tacos
                    </Text>
                    <Text color='dimmed' size='sm'>
                      Timeline bullet as ThemeIcon component
                    </Text>
                  </Timeline.Item>
                </Timeline>
              </Stack>
              <Stack mt='xl'>
                <Text fz='lg' fw={700}>
                  Educational path
                </Text>
                <Timeline>
                  <Timeline.Item title='Default bullet' bulletSize={24}>
                    <Text color='dimmed' size='sm'>
                      Default bullet without anything
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='Avatar'
                    bulletSize={24}
                    bullet={
                      <Avatar
                        size={22}
                        radius='xl'
                        src='https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4'
                      />
                    }
                  >
                    <Text color='dimmed' size='sm'>
                      Timeline bullet as avatar image
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='Icon'
                    bulletSize={24}
                    bullet={<Sun size='0.8rem' />}
                  >
                    <Text color='dimmed' size='sm'>
                      Timeline bullet as icon
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='ThemeIcon'
                    bulletSize={24}
                    bullet={
                      <ThemeIcon
                        size={22}
                        variant='gradient'
                        gradient={{ from: 'lime', to: 'cyan' }}
                        radius='xl'
                      >
                        <Video size='0.8rem' />
                      </ThemeIcon>
                    }
                  >
                    <Text color='dimmed' size='sm'>
                      Timeline bullet as ThemeIcon component
                    </Text>
                  </Timeline.Item>
                </Timeline>
              </Stack>
              <Stack mt='xl'>
                <Text fw={700} fz='lg'>
                  Certificates
                </Text>
                <Text>Chines Busines (Segedinzer Gulasch)</Text>
              </Stack>
              <Stack mt='xl'>
                <Text fw={700} fz='lg'>
                  Skills
                </Text>
                <Text>Kochen, Essen, trinken</Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Pod>
      ) : null}
    </Layout>
  )
}

export default Page
