import { NextPage } from 'next'
import { useEffect } from 'react'
import { useMantineColorScheme } from '@mantine/core'

import Frontpage from './frontpage'
import TOC from './toc'
import Introduction from './introduction'
import Biography from './biography'
import Resume from './resume'
import Experience from './experience'
import Skills from './skills'
import Contact from './contact'
import { useRestrictedArea } from '../../hooks'
import { Chapter, PageBreak } from '../../components'

const Page: NextPage = () => {
  const { toggleColorScheme } = useMantineColorScheme()
  useRestrictedArea('fnt')

  useEffect(() => {
    toggleColorScheme('light')

    return () => {
      toggleColorScheme('dark')
    }
  }, [toggleColorScheme])

  return (
    <>
      <Frontpage></Frontpage>
      <TOC></TOC>
      <Chapter label='Introduction'></Chapter>
      <Introduction></Introduction>
      <Chapter label='Biography'></Chapter>
      <Biography></Biography>
      <PageBreak></PageBreak>
      <Chapter label='Resume'></Chapter>
      <Resume></Resume>
      <PageBreak></PageBreak>
      <Chapter label='Experience'></Chapter>
      <Experience></Experience>
      <PageBreak></PageBreak>
      <Chapter label='Skills'></Chapter>
      <Skills></Skills>
      <PageBreak></PageBreak>
      <Chapter label='Contact'></Chapter>
      <Contact></Contact>
    </>
  )
}

export default Page
