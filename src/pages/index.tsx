import Typed from 'react-typed'
import { createStyles, rem } from '@mantine/core'
import { NextPage } from 'next'
import 'react-typed/dist/animatedCursor.css'

import { Layout, Me, Pod } from '../components'

const useStyles = createStyles((theme) => ({
  hero: {
    textAlign: 'center',
    marginBottom: rem(60),
    display: 'block',
    fontSize: rem(64),
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: rem(32)
    }
  },
  terminal: {
    backgroundColor: '#000000',
    padding: 20,
    borderRadius: 8
  },
  path: {
    fontFamily: 'monospace'
  },
  client: {
    fontFamily: 'monospace',
    color:
      theme.colorScheme === 'light'
        ? theme.colors.cyan[4]
        : theme.colors.cyan[7]
  },
  command: {
    fontFamily: 'monospace'
  },
  property: {
    color: theme.colors.blue[3]
  }
}))

const Page: NextPage = () => {
  const { classes } = useStyles()

  return (
    <Layout title='Start'>
      <Pod>
        <Typed
          showCursor
          className={classes.hero}
          startDelay={2000}
          typeSpeed={70}
          backDelay={3000}
          backSpeed={120}
          smartBackspace
          strings={['Hello, my name is Fred', 'Hello, my name is Stefan...']}
        ></Typed>
        {/* <Group className={classes.terminal}>
          <Stack spacing={4}>
            <Group>
              <Text className={classes.client}>dreitagebart@fedora</Text>
              <Text className={classes.path}>~</Text>
              <Typed
                showCursor={false}
                className={classes.command}
                startDelay={2000}
                strings={['cd scripts']}
                backDelay={1500}
                backSpeed={120}
                typeSpeed={60}
                onComplete={() => setCommands(2)}
              ></Typed>
            </Group>
            {commands >= 2 && (
              <Group>
                <Text className={classes.client}>dreitagebart@fedora</Text>
                <Text className={classes.path}>~/scripts</Text>
                <Typed
                  showCursor={false}
                  className={classes.command}
                  startDelay={1200}
                  strings={['./welcome.sh']}
                  backDelay={1500}
                  backSpeed={120}
                  typeSpeed={60}
                  onComplete={() => setCommands(3)}
                ></Typed>
              </Group>
            )}
            {commands >= 3 && (
              <Group>
                <Text className={classes.client}>dreitagebart@fedora</Text>
                <Text className={classes.path}>~/scripts</Text> 
        <Text className={classes.command}>Hello, my name is Stefan</Text>
        <Typed
                  showCursor={false}
                  className={classes.command}
                  smartBackspace
                  startDelay={2000}
                  strings={['Hi, my name is Fred', 'Hi, my name is Stefan...']}
                  backDelay={1500}
                  backSpeed={120}
                  typeSpeed={60}
                ></Typed> 
              </Group>
            )}
            {commands >= 3 && (
              <Group>
                <Text className={classes.client}>dreitagebart@fedora</Text>
                <Text className={classes.path}>~/scripts</Text>
                <Typed
                  showCursor={false}
                  className={classes.command}
                  smartBackspace
                  startDelay={4000}
                  strings={['cd ..']}
                  backDelay={1500}
                  backSpeed={120}
                  typeSpeed={60}
                  onComplete={() => setCommands(4)}
                ></Typed>
              </Group>
            )}
            {commands >= 4 && (
              <Group>
                <Text className={classes.client}>dreitagebart@fedora</Text>
                <Text className={classes.path}>~</Text>
                <Typed
                  showCursor={false}
                  className={classes.command}
                  smartBackspace
                  startDelay={4000}
                  strings={['cat me.json']}
                  backDelay={1500}
                  backSpeed={120}
                  typeSpeed={60}
                  onComplete={() => setCommands(5)}
                ></Typed>
              </Group>
            )}
            {commands >= 5 && (
              <Group>
                <pre>{`${JSON.stringify(me, null, 2)}`}</pre>
              </Group>
            )}
            <Text></Text>
          </Stack>
        </Group> */}
        <Me></Me>
      </Pod>
    </Layout>
  )
}

export default Page
