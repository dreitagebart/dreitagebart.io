import { createStyles, Group, rem, Table, Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { Badge } from '@mantine/core'
import { Center, Container, Loader, SimpleGrid } from '@mantine/core'
import { NextPage } from 'next'
import {
  Certificate,
  Coin,
  Cookie,
  Gauge,
  Truck,
  User
} from 'tabler-icons-react'

import {
  FeatureCard,
  Heading,
  Layout,
  PageTitle,
  Pod,
  SubTitle,
  WorkCard
} from '../../components'
import { useRestrictedArea } from '../../hooks'

const mockdata2 = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: Gauge
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: User
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: Cookie
  }
]

const mockdata = [
  {
    icon: Truck,
    title: 'Free Worldwide shipping',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.'
  },
  {
    icon: Certificate,
    title: 'Best Quality Product',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.'
  },
  {
    icon: Coin,
    title: 'Very Affordable Pricing',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.'
  }
]

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24)
    }
  },
  description: {
    maxWidth: 600,
    margin: 'auto',
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  remark: {
    fontStyle: 'italic'
  }
}))

const Page: NextPage = () => {
  const { loading } = useRestrictedArea('fnt')
  const { classes } = useStyles()

  return (
    <Layout title='Skills'>
      {loading ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : (
        <Pod>
          <PageTitle>Languages</PageTitle>
          <SubTitle>
            Certainly, it is difficult to divide the wealth of experience into
            levels. However, this page should give you a rough overview of it.
          </SubTitle>
          <Heading id='languages'>
            Languages / Frameworks / Libraries / Technologies
          </Heading>
          <Table>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Level</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript/TypeScript</td>
                <td>
                  <Badge color='green'>expert</Badge>
                </td>
                <td className={classes.remark}></td>
              </tr>
              <tr>
                <td>HTML</td>
                <td>
                  <Badge color='green'>expert</Badge>
                </td>
                <td className={classes.remark}></td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>
                  <Badge color='green'>expert</Badge>
                </td>
                <td className={classes.remark}></td>
              </tr>
              <tr>
                <td>ABAP</td>
                <td>
                  <Badge color='green'>expert</Badge>
                </td>
                <td className={classes.remark}></td>
              </tr>
              <tr>
                <td>Rust</td>
                <td>
                  <Badge color='yellow'>beginner</Badge>
                </td>
                <td className={classes.remark}>Learning and experimenting</td>
              </tr>
              <tr>
                <td>Go</td>
                <td>
                  <Badge color='yellow'>beginner</Badge>
                </td>
                <td className={classes.remark}>Learning and experimenting</td>
              </tr>
              <tr>
                <td>Markdown</td>
                <td>
                  <Badge color='blue'>proficient</Badge>
                </td>
                <td className={classes.remark}>
                  I know it&apos; not that hard
                </td>
              </tr>
              <tr>
                <td>SQL / RDBMS</td>
                <td>
                  <Badge color='blue'>proficient</Badge>
                </td>
                <td className={classes.remark}>
                  There are many flavours out there, so it depends... But I
                  master all that relational stuff
                </td>
              </tr>
              <tr>
                <td>NoSQL</td>
                <td>
                  <Badge color='blue'>proficient</Badge>
                </td>
                <td className={classes.remark}>
                  I have not used it much in the past
                </td>
              </tr>
              <tr>
                <td>PHP</td>
                <td>
                  <Badge color='gray'>no longer used</Badge>
                </td>
                <td className={classes.remark}>
                  I don&apos;t actively use this language anymore, but I am able
                  to read and understand it.
                </td>
              </tr>
            </tbody>
          </Table>
          <Heading mt='xl' id='software'>
            Frameworks / Libraries / Technologies
          </Heading>
          <Table>
            <thead>
              <tr>
                <th>Software</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React</td>
                <td></td>
              </tr>
              <tr>
                <td>NextJS / SSR / SSG</td>
                <td></td>
              </tr>
              <tr>
                <td>Docker</td>
                <td></td>
              </tr>
              <tr>
                <td>Linux / Fedora / Ubuntu</td>
                <td></td>
              </tr>
              <tr>
                <td>REST API</td>
                <td></td>
              </tr>
              <tr>
                <td>GraphQL</td>
                <td></td>
              </tr>
              <tr>
                <td>Docker / Podman</td>
                <td></td>
              </tr>
              <tr>
                <td>Kubernetes / Rancher</td>
                <td></td>
              </tr>
              <tr>
                <td>Electron</td>
                <td></td>
              </tr>
              <tr>
                <td>Tauri</td>
                <td></td>
              </tr>
              <tr>
                <td>React Native</td>
                <td></td>
              </tr>
              <tr>
                <td>Wordpress</td>
                <td></td>
              </tr>
              <tr>
                <td>Raspberry Pi</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <Heading mt='xl' id='software'>
            Some notable software
          </Heading>
          <Table>
            <thead>
              <tr>
                <th>Software</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microsoft Azure DevOps</td>
                <td></td>
              </tr>
              <tr>
                <td>JIRA / Confluence</td>
                <td></td>
              </tr>
              <tr>
                <td>Visual Studio Code</td>
                <td></td>
              </tr>
              <tr>
                <td>SAP ERP</td>
                <td></td>
              </tr>
              <tr>
                <td>Microsoft / Libre Office</td>
                <td></td>
              </tr>
              <tr>
                <td>GIMP</td>
                <td></td>
              </tr>
            </tbody>
          </Table>

          <SimpleGrid cols={3} spacing='xl'>
            {mockdata.map(({ icon, description, title }) => {
              return (
                <WorkCard
                  key={title}
                  icon={icon}
                  title={title}
                  description={description}
                ></WorkCard>
              )
            })}
          </SimpleGrid>
          <Container size='lg' py='xl'>
            <Group position='center'>
              <Badge variant='filled' size='lg'>
                Best company ever
              </Badge>
            </Group>
            <Title order={2} className={classes.title} ta='center' mt='sm'>
              Integrate effortlessly with any technology stack
            </Title>
            <Text
              c='dimmed'
              className={classes.description}
              ta='center'
              mt='md'
            >
              Every once in a while, you’ll see a Golbat that’s missing some
              fangs. This happens when hunger drives it to try biting a
              Steel-type Pokémon.
            </Text>
            <SimpleGrid
              cols={3}
              spacing='xl'
              mt={50}
              breakpoints={[{ maxWidth: 'md', cols: 1 }]}
            >
              {mockdata2.map(({ title, icon, description }) => {
                return (
                  <FeatureCard
                    key={title}
                    title={title}
                    icon={icon}
                    description={description}
                  ></FeatureCard>
                )
              })}
            </SimpleGrid>
          </Container>
        </Pod>
      )}
    </Layout>
  )
}

export default Page
