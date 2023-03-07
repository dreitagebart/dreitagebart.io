import { Text } from '@mantine/core'
import { NextPage } from 'next'
import { FC } from 'react'

import { Heading, Layout, PageTitle, Pod, SubTitle } from '../components'

const Page: FC<NextPage> = () => {
  return (
    <Layout title='About'>
      <Pod>
        <PageTitle>About</PageTitle>
        <SubTitle>
          How nice that you found the about page, where I try to describe myself
          without quoting my mom or dad. This would probably be the most
          interesting thing you&apos;ll find on this website.
        </SubTitle>
        <SubTitle>
          You&apos;re probably wondering who I am and why you should trust me.
          Well, I can assure you that at least I take my coffee black.
        </SubTitle>
        <Heading mt='xl' id='who-i-am'>
          Who I am
        </Heading>
        <Text>
          I&apos;m Stefan, and I believe that life is a journey of
          self-discovery. I&apos;ve spent years exploring my passions,
          interests, and talents to find out who I am and what I want to achieve
          in life.
        </Text>
        <Text mt='md'>
          I&apos;m a software developer, and I&apos;ve always been drawn to web
          development. I enjoy listening and making music, doing some sports and
          making software development in my free time and love cooking. I&apos;m
          constantly seeking new challenges to push myself out of my comfort
          zone. Whether I made probably the world&apos;s best spaghetti
          bolognese or working for almost 3 months in China, I&apos;m always
          looking for ways to grow and improve.
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
        <Heading mt='xl' id='what-i-do'>
          What I do
        </Heading>
        <Text>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </Text>
        <Heading mt='xl' id='what-i-think'>
          What I think
        </Heading>
        <Text>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </Text>
      </Pod>
    </Layout>
  )
}

export default Page
