import { createStyles, Group, rem, Table, Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { Badge } from '@mantine/core'
import { Center, Container, Loader, SimpleGrid } from '@mantine/core'
import { NextPage } from 'next'
import { Cookie, Gauge, Star, User } from 'tabler-icons-react'

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
import { List } from '@mantine/core'
import { ThemeIcon } from '@mantine/core'

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
  // leitsatz für language / frameworks / skills
  // aufzählung Listelement
  return (
    <Layout title='Skills'>
      {loading ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : (
        <Pod>
          <PageTitle>Skills</PageTitle>
          <SubTitle>
            Surely it is difficult to divide the wealth of experience into
            levels, nevertheless this page should give you a rough overview of
            my skills and knowledge.
          </SubTitle>
          <Heading id='languages'>Languages</Heading>
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
                  I know it&apos;s not that hard
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
          <SubTitle>
            In the following a list of things, which I use for my developments
            in principle, but also master.
          </SubTitle>
          <List
            spacing='xs'
            size='sm'
            center
            icon={
              // <ThemeIcon color='cyan' size={24} radius='xl'>
              <Star size='1rem' color='cyan' />
              // </ThemeIcon>
            }
          >
            <List.Item>React</List.Item>
            <List.Item>NextJS / SSR / SSG</List.Item>
            <List.Item>Docker</List.Item>
            <List.Item>Linux / Fedora / Ubuntu</List.Item>
            <List.Item>REST API</List.Item>
            <List.Item>GraphQL</List.Item>
            <List.Item>Docker / Podman</List.Item>
            <List.Item>Git</List.Item>
            <List.Item>Kubernetes / Rancher</List.Item>
            <List.Item>Electron</List.Item>
            <List.Item>Tauri</List.Item>
            <List.Item>React Native</List.Item>
            <List.Item>Wordpress</List.Item>
            <List.Item>Raspberry Pi</List.Item>
          </List>
          <Heading mt='xl' id='software'>
            Some notable software
          </Heading>
          <List
            spacing='xs'
            size='sm'
            center
            icon={
              // <ThemeIcon color='cyan' size={24} radius='xl'>
              <Star size='1rem' color='cyan' />
              // </ThemeIcon>
            }
          >
            <List.Item>Microsoft Azure DevOps</List.Item>
            <List.Item>JIRA / Confluence</List.Item>
            <List.Item>Visual Studio Code</List.Item>
            <List.Item>SAP ERP</List.Item>
            <List.Item>Microsoft / Libre Office</List.Item>
            <List.Item>GIMP</List.Item>
          </List>
        </Pod>
      )}
    </Layout>
  )
}

export default Page
