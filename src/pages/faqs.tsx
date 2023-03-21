import Image from 'next/image'
import { Accordion, Center, Col, Grid } from '@mantine/core'
import { createStyles } from '@mantine/core'
import { NextPage } from 'next'
import { FC, ReactNode } from 'react'
import { rem } from '@mantine/core'

import whaaat from '../assets/images/whaaat.png'
import { Layout, PageTitle, Pod, SubTitle } from '../components'

const useStyles = createStyles((theme) => ({
  image: {
    borderRadius: '100%',
    width: rem(420),
    height: 'auto',
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      width: rem(200)
    }
  },
  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]
  }
}))

const faqs: Array<{
  question: string
  answer: ReactNode
  value: string
}> = [
  {
    question: 'Mac or Windows?',
    answer: 'Fedora Linux',
    value: 'mac-or-win'
  },
  {
    question: 'iOS or Android',
    answer: (
      <>
        I don&apos;t like smartphones, but when I have to use them, it&apos;s
        Android
      </>
    ),
    value: 'phone-os'
  },
  {
    question: 'Remote work or work in office?',
    answer: 'Remote work',
    value: 'work'
  },
  {
    question: 'Coffee or tea?',
    answer: 'Loose black tea, otherwise black coffee without milk and sugar',
    value: 'coffee-or-tea'
  },
  {
    question: 'Cat or dog?',
    answer: 'Dog',
    value: 'catdog'
  },
  {
    question: 'Are you vegan?',
    answer: 'I am only a hobby vegan',
    value: 'vegan'
  },
  {
    question: 'What code editor do you use?',
    answer: 'Visual Studio Code',
    value: 'editor'
  },
  {
    question: 'Your favourite coding language',
    answer: 'Stay safe, code in Typescript!',
    value: 'codelang'
  },
  {
    question: 'Your favourite web frontend framework/library',
    answer: 'Yes, React',
    value: 'frontend'
  },
  {
    question: 'How to get better in programming?',
    answer: <>Make mistakes, fuck up and don&apos;t repeat it again</>,
    value: 'better-programming'
  }
]

const Page: FC<NextPage> = () => {
  const { classes } = useStyles()

  return (
    <Layout title='FAQs'>
      <Pod>
        <PageTitle>Frequently Asked Questions</PageTitle>
        <SubTitle>
          You want to ask me some questions...?<br></br>Perhaps you can try to
          find the answers here.
        </SubTitle>
        <Grid gutter={50}>
          <Col span={12} md={6}>
            <Center>
              <Image
                src={whaaat}
                alt='Frequently Asked Questions'
                className={classes.image}
              />
            </Center>
          </Col>
          <Col span={12} md={6}>
            <Accordion
              chevronPosition='left'
              defaultValue={faqs[0].value}
              variant='separated'
            >
              {faqs.map(({ question, answer, value }) => {
                return (
                  <Accordion.Item
                    key={value}
                    className={classes.item}
                    value={value}
                  >
                    <Accordion.Control>{question}</Accordion.Control>
                    <Accordion.Panel>{answer}</Accordion.Panel>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </Col>
        </Grid>
      </Pod>
    </Layout>
  )
}

export default Page
