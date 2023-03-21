import { createStyles, Group, rem, Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { Badge } from '@mantine/core'
import { Center, Container, Loader, SimpleGrid } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'
import {
  Certificate,
  Coin,
  Cookie,
  Gauge,
  Truck,
  User
} from 'tabler-icons-react'

import { FeatureCard, Layout, PageTitle, Pod, WorkCard } from '../../components'
import { useFNT } from '../../hooks'

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
  }
}))

const Page: FC<NextPage> = () => {
  const { user, status } = useFNT()
  const { classes, theme } = useStyles()

  return (
    <Layout title='Work'>
      {status === 'loading' ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : status === 'authenticated' ? (
        <Pod>
          <PageTitle>Work</PageTitle>
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
      ) : null}
    </Layout>
  )
}

export default Page
