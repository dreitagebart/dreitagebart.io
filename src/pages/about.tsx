import { Alert, Text } from '@mantine/core'
import { NextPage } from 'next'

import { Heading, Layout, PageTitle, Pod, SubTitle, Tldr } from '../components'
import { Help, QuestionMark } from 'tabler-icons-react'
import Link from 'next/link'

const Page: NextPage = () => {
  return (
    <Layout title='About'>
      <Pod>
        <PageTitle>About</PageTitle>
        <SubTitle>
          How nice that you found the about page, where I try to describe myself
          without quoting my mom or dad. This would probably be the most
          interesting thing you&apos;ll find on this website.
        </SubTitle>
        <Tldr>
          You&apos;re probably wondering who I am and why you should trust me.
          Well, I can assure you that at least I take my coffee black.
        </Tldr>
        <Heading mt='xl' id='who-i-am'>
          Who I am
        </Heading>
        <Text mt='md'>
          My name is Stefan, and some people call me fred, but I won&apos;t tell
          you why... born late in 1985 and raised in a beautiful village called
          Markelsheim. I am passionate about software development with more than
          15 years of job experience in IT. You can call me a &quot;full-stack
          badass&quot; if you want.
        </Text>
        <Heading mt='xl' id='what-i-think'>
          What I think
        </Heading>
        <Text>
          I believe that life is a journey of self-discovery. I&apos;ve spent
          years exploring my passions, interests, and talents to find out who I
          am and what I want to achieve in life.
        </Text>
        <Text mt='md'>
          I&apos;m a software developer, and I&apos;ve always been drawn to web
          development. I enjoy listening and making music, doing some sports,
          learning all that &quot;techie stuff&quot; in making software
          development and love cooking. I&apos;m constantly seeking new
          challenges to push myself out of my comfort zone. Whether I made
          probably the world&apos;s best spaghetti bolognese or working for
          almost 3 months in China, I&apos;m always looking for ways to grow and
          improve.
        </Text>
        <Text mt='md'>
          But beyond all that, I&apos;m also someone who values honesty,
          integrity and respect. I believe that each person has the ability to
          make a positive impact on the world, and I strive to live my life in
          accordance with those principles. For me, life is about being the
          change you wish to see in the world and I do my best to embrace every
          opportunity to learn, grow, and make a positive impact on the world.
        </Text>
        <Text mt='md'>
          So that&apos;s who I am - a software developer with a passion for web
          technologies, a lover of music, and a believer in integrity. I&apos;m
          excited to see where life takes me next and to continue on this
          journey of self-discovery.
        </Text>
        <Alert icon={<Help size={48}></Help>} mt='xl'>
          Do you have any unanswered questions about me? Maybe{' '}
          <Link href='/faqs'>the FAQ page</Link> will help you. Otherwise you
          can <Link href='/contact'>contact me</Link>.
        </Alert>
      </Pod>
    </Layout>
  )
}

export default Page
