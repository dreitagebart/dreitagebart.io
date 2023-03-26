import Image from 'next/image'
import { Avatar, ThemeIcon, Timeline } from '@mantine/core'
import { Center, Grid, Group, Loader, Stack, Text } from '@mantine/core'
import { NextPage } from 'next'
import { FC, ReactNode } from 'react'
import {
  Ballon,
  Cake,
  Certificate,
  CurrentLocation,
  DeviceMobile,
  LayersLinked,
  Mail,
  School,
  Sun,
  Video
} from 'tabler-icons-react'

import profile from '../../assets/images/profile.jpg'
import { Layout, Pod } from '../../components'
import { useRestrictedArea } from '../../hooks'

type Item = {
  time: ReactNode
  title: ReactNode
  description: ReactNode
}

const education: Array<Item> = [
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

const experience: Array<Item> = [
  {
    time: '2007 - 2008',
    title: 'Team lead / key account management for logistics',
    description: 'Planning and execution of deliveries to key account Amazon'
  },
  {
    time: '2011 - 2012',
    title: 'SAP implementation ebm-papst branch office France (Obernai)',
    description: (
      <>
        Subproject manager for data migration and master/product data management
        <br></br>
        Transfer of all data from legacy system to SAP
      </>
    )
  },
  {
    time: '2012 - 2013',
    title: 'SAP implementation ebm-papst branch office Italy (Mozzate)',
    description: (
      <>
        Subproject manager for data migration and master/product data management
        <br></br>
        Transfer of all data from legacy system to SAP
      </>
    )
  },
  {
    time: '2014 - 2015',
    title: 'SAP implementation ebm-papst branch office China (Shanghai)',
    description: (
      <>
        Support as &ldquo;German expert&ldquo; in the area of data migration and
        master data management
      </>
    )
  },
  {
    time: 'since 2014',
    title: 'Project epGML (ebm-papst Globale MaterialnummernLogik)',
    description: (
      <>
        Contact person and carry out the implementation of a non-speaking
        material number logic in SAP
      </>
    )
  },
  {
    time: 'since 2015',
    title: 'Project ECM (Engineering Change Management)',
    description: (
      <>
        Support in the implementation and contact person in the development of a
        management program for change projects on products
      </>
    )
  },
  {
    time: '2015',
    title: 'Collaboration epIN',
    description: (
      <>
        Recruitment and development of an IT department in the ebm-papst branch
        office in India (Chennai), which mainly supports the SAP area in the
        Asian region in cooperation with IT ebm-papst Mulfingen.
      </>
    )
  },
  {
    time: '2015',
    title:
      'Technology conversion master data management at ebm-papst Mulfingen',
    description: (
      <>
        Conversion of the technology of an existing master data management in
        SAP - main contact person + implementation support
      </>
    )
  },
  {
    time: '2016',
    title:
      'SAP implementation EWM at ebm-papst Mulfingen (Extended Warehouse Management)',
    description: (
      <>
        Main contact person for master data management<br></br>
        Implementing requirements from project<br></br>
        Adaptation of material master data for EWM processes (mass changes)
      </>
    )
  },
  {
    time: '2016',
    title: 'SAP implementation QM at ebm-papst Mulfingen (Quality Management)',
    description: (
      <>
        Main contact person for master data management<br></br>
        Implementing requirements from project
      </>
    )
  },
  {
    time: '2016 - 2017',
    title: (
      <>
        Integration &ldquo;Industrial Ventilation Technology&ldquo; (carve out)
      </>
    ),
    description: (
      <>
        Subproject manager data migration and contact person for master data
        management<br></br>
        Transfer of a complete product line from subsidiary into the existing
        SAP system ebm-papst Mulfingen in cooperation with external company
      </>
    )
  }
]

const Page: FC<NextPage> = () => {
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
            <Grid.Col span={8}>
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
