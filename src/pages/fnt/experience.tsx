import {
  Box,
  Center,
  Flex,
  Grid,
  Group,
  Loader,
  Stack,
  Text,
  Title
} from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'

import { Heading, Layout, PageTitle, Pod, Section, TOC } from '../../components'
import { useFNT } from '../../hooks'

const Page: FC<NextPage> = () => {
  const { user, status } = useFNT()

  return (
    <Layout title='Experience'>
      {status === 'loading' ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : status === 'authenticated' ? (
        <Pod>
          <Flex gap='xl' direction='row'>
            <Stack sx={{ width: '100%' }}>
              <PageTitle>Experience</PageTitle>
              <Section id='sec-personal-data'>
                <Heading id='personal-data'>Personal data</Heading>
                <Grid>
                  <Grid.Col span={4}>
                    <Text fw={700}>First and lastname</Text>
                  </Grid.Col>
                  <Grid.Col span={8}>
                    <Text color='dimmed'>Stefan Büchold</Text>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span={4}>
                    <Text fw={700}>Date of birth</Text>
                  </Grid.Col>
                  <Grid.Col span={8}>
                    <Text color='dimmed'>27.11.1985</Text>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span={4}>
                    <Text fw={700}>Place of birth</Text>
                  </Grid.Col>
                  <Grid.Col span={8}>
                    <Text color='dimmed'>Bad Mergentheim</Text>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span={4}>
                    <Text fw={700}>Family status</Text>
                  </Grid.Col>
                  <Grid.Col span={8}>
                    <Text color='dimmed'>unmarried</Text>
                  </Grid.Col>
                </Grid>
              </Section>
            </Stack>
            <TOC
              offset={200}
              links={[
                {
                  id: 'sec-personal-data',
                  order: 1,
                  label: 'Personal data'
                }
              ]}
            ></TOC>
          </Flex>
        </Pod>
      ) : null}
    </Layout>
  )
}

export default Page
