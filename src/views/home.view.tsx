import { faker } from '@faker-js/faker'
import { Button, Title } from '@mantine/core'
import { Container, Group, Text } from '@mantine/core'
import { IconBubbleFilled, IconMessage } from '@tabler/icons-react'

import Link from 'next/link'
import classes from './home.view.module.css'

const dummyText = Array.from({ length: 100 }, (_, i) => (
  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
  <Text key={i}>{faker.lorem.sentences(10)}</Text>
))

export const HomeView = () => {
  return (
    <div className={classes.wrapper}>
      <Container size='xl' className={classes.inner}>
        <Title className={classes.title}>
          <Text
            component='span'
            variant='gradient'
            gradient={{ from: 'brand.0', to: 'teal.6' }}
            inherit>
            dreitagebart
          </Text>{' '}
          <Text fz='h6' ff='var(--mantine-font-family-monospace)' span>
            /'draɪ̯taːɡəbaʁt/
          </Text>
        </Title>
        <Text className={classes.description} c='dimmed'>
          &#091;German&#093; <i>n.</i>&nbsp;&nbsp;&nbsp;A{' '}
          <Text fw='bold' span inherit>
            three-day beard
          </Text>
          , typically a short stubble.
        </Text>
        <Text className={classes.description} color='dimmed'>
          While the name suggests a minimalist approach to facial hair, the
          actual "dreitagebart" you'll encounter is often a full-fledged beard,
          symbolizing a depth of experience far beyond a fleeting phase. It's
          the kind of beard that has seen unbelievable things, coded awesome
          stuff and solved a lot of problems. And yes, it's also the kind of
          beard that enjoys a good laugh.
        </Text>
        <Group className={classes.controls}>
          <Button
            component={Link}
            href='/projects'
            size='xl'
            variant='gradient'
            gradient={{ deg: 190, from: 'brand.0', to: 'brand.9' }}>
            See projects
          </Button>
          <Button
            component={Link}
            href='/contact'
            size='xl'
            variant='default'
            leftSection={<IconMessage size={42} />}>
            Let's connect
          </Button>
        </Group>
      </Container>
      <div>{dummyText}</div>
    </div>
  )
}
