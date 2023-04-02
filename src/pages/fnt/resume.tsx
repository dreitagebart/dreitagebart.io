import Image from 'next/image'
import { Timeline } from '@mantine/core'
import { Center, Grid, Group, Loader, Stack, Text } from '@mantine/core'
import { NextPage } from 'next'
import {
  Ballon,
  Cake,
  Certificate,
  CurrentLocation,
  DeviceMobile,
  LayersLinked,
  Mail,
  School
} from 'tabler-icons-react'

import profile from '../../assets/images/lowkey_color.jpg'
import { Layout, Pod } from '../../components'
import { useRestrictedArea } from '../../hooks'
import { TimelineItems } from '../../utils'

const education: TimelineItems = [
  {
    time: '2002',
    title: 'School graduation middle school maturity',
    description: 'Kopernikus Realschule Bad Mergentheim'
  },
  {
    time: '2003',
    title: 'School graduation Berufskolleg I (Business Assistant)',
    description: 'KSM Bad Mergentheim'
  },
  {
    time: '2004',
    title: 'School graduation Berufskolleg II (Commercial Diploma)',
    description: 'KSM Bad Mergentheim'
  },
  {
    time: '2005 - 2007',
    title:
      'Apprenticeship as a management assistant for office communication (Kaufmann für Bürokommunikation)',
    description: 'Computation Systemhaus GmbH'
  },
  {
    time: '2008 - 2011',
    title: 'Apprenticeship as an information technology clerk (IT Kaufmann)',
    description: 'ebm-papst GmbH & Co. KG'
  }
]

const experience: TimelineItems = [
  {
    time: 'since 2017 until today',
    title: 'WITTENSTEIN SE',
    description: <>Software Developer</>
  },
  {
    time: '2008 - 2017',
    title: 'ebm-papst GmbH & Co. KG',
    description: (
      <>
        Inhouse Consultant for Master and Product Data Management and
        application developer
      </>
    )
  },
  {
    time: '2007 - 2008',
    title: 'Computation Systemhaus GmbH & Co. KG',
    description: <>Team lead / key account management for logistics</>
  }
]

const Page: NextPage = () => {
  const { loading } = useRestrictedArea('fnt')

  return (
    <Layout title='Resume'>
      {loading ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : (
        <Pod>
          <Grid gutter='xl'>
            <Grid.Col sm={12} md={4}>
              <Stack>
                <Stack align='center'>
                  <Image
                    src={profile}
                    style={{ borderRadius: 12, maxWidth: 300, height: 'auto' }}
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
                  <Text color='dimmed'>
                    To utilize my skills and expertise in software development,
                    to contribute positively to a dynamic organization that
                    values creativity, collaboration, and innovation, while
                    continually expanding my knowledge and skills to achieve
                    professional growth and personal fulfillment.
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
                    <DeviceMobile></DeviceMobile>
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
                  <Text>French, basic</Text>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={8}>
              <Stack>
                <Group spacing='sm'>
                  <LayersLinked size={36}></LayersLinked>
                  <Text fz='lg' fw={700}>
                    Working experience
                  </Text>
                </Group>
                <Timeline
                  lineWidth={2}
                  ml={8}
                  color='cyan'
                  active={experience.length - 1}
                >
                  {experience.map(({ time, title, description }, index) => {
                    return (
                      <Timeline.Item key={index} title={time}>
                        <Text color='cyan' fw={500}>
                          {title}
                        </Text>
                        <Text color='dimmed' size='sm'>
                          {description}
                        </Text>
                      </Timeline.Item>
                    )
                  })}
                </Timeline>
              </Stack>
              <Stack mt='xl'>
                <Group spacing='sm'>
                  <School size='36'></School>
                  <Text fz='lg' fw={700}>
                    Educational path
                  </Text>
                </Group>
                <Timeline
                  lineWidth={2}
                  ml={8}
                  color='cyan'
                  active={education.length - 1}
                >
                  {education.map(({ time, title, description }, index) => {
                    return (
                      <Timeline.Item key={index} title={time}>
                        <Text color='cyan' fw={500}>
                          {title}
                        </Text>
                        <Text color='dimmed' size='sm'>
                          {description}
                        </Text>
                      </Timeline.Item>
                    )
                  })}
                </Timeline>
              </Stack>
              <Stack mt='xl'>
                <Group spacing='sm'>
                  <Certificate size='36'></Certificate>
                  <Text fz='lg' fw={700}>
                    Certificate
                  </Text>
                </Group>
                <Text>Chinese Business</Text>
              </Stack>
              <Stack mt='xl'>
                <Group spacing='sm'>
                  <Ballon size='36'></Ballon>
                  <Text fz='lg' fw={700}>
                    Hobbies and Interests
                  </Text>
                </Group>
                <Text>Music, podcasts, IT, sports and cooking</Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Pod>
      )}
    </Layout>
  )
}

export default Page
