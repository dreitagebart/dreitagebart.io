import { Center, Loader, Text } from '@mantine/core'
import { NextPage } from 'next'

import { Layout, PageTitle, Pod } from '../../components'
import { useRestrictedArea } from '../../hooks'

const Page: NextPage = () => {
  const { loading } = useRestrictedArea('career')

  return (
    <Layout title='Biography'>
      {loading ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : (
        <Pod>
          <PageTitle>Biography</PageTitle>
          <Text>
            Back in the 90s when I was 11 years old, I created my first website
            - at a time when Google was still largely a foreign word. I typed
            letter by letter, HTML tag by HTML tag into an editor (I think it
            was called Phase 5). CSS support was still in its infancy.
            JavaScript wasn&apos;t as far along and even powerful back then as
            it is today.
          </Text>
          <Text mt='xl'>
            I wanted it to be a little more dynamic, so I had learned about PHP.
            It wasn&apos;t long before I made my first connection to a MySQL
            database. While I tried to gain my experience with the programming
            language C/C++ before and failed miserably, I thus paved the way for
            website development.
          </Text>
          <Text mt='xl'>
            So in my spare time after school I started to develop websites,
            guestbooks (those were the days) and forum systems. My love for web
            development grew and gathered more and more of my experience.
          </Text>
          <Text mt='xl'>
            I was always excited and fascinated by computers and all that
            internet things and knew then that I wanted to do &laquo;something
            in IT&raquo; as a career.
          </Text>
          <Text mt='xl'>
            A few years passed and during this time I steadily educated myself.
            In my job as an &laquo;IT guy&raquo; I got to know SAP and never
            thought that I would eventually earn my bread with it. With dozens
            of business trips abroad I grew more and more to what I am today. My
            experience with the JavaScript programming language started with
            AngularJS (version 1) and about 1 year later I got to know ReactJS.
            I was very excited and didn&apos;t want to use anything else except
            React.
          </Text>
          <Text mt='xl'>
            I would say of myself that I am self-taught. It was never the case
            that I had someone at my side who had explained everything to me
            about how something works. I owe it to my will, passion and
            enthusiasm that I am who I am today. I always wanted to know how
            apps worked, what different technical terms meant or what was behind
            the buzzwords. For me it means rest and relaxation to learn
            something new and discover new ways to solve things in IT.
          </Text>
          <Text mt='xl'>
            At this point in time, I am very proud of what I know and it fills
            me with joy when the applications I have developed find acceptance
            and help people. I would say that I have turned my hobby into my
            profession. But it is not time to stop, because standing still means
            going backwards, especially in information technology.
          </Text>
        </Pod>
      )}
    </Layout>
  )
}

export default Page
