import { ReactNode } from 'react'

interface OpenGraphProps {
  title: string
  description: string
  locale: string
  image: string
  siteName: string
  url: string
  type: 'website' | 'article'
}

export type TimelineItem = {
  time: ReactNode
  title: ReactNode
  description: ReactNode
}

export type TimelineItems = Array<TimelineItem>

export type NavbarItem = {
  label: string
  href: string
}

export type NavbarItems = Array<NavbarItem>

export type OpenGraph = Partial<OpenGraphProps>

export type BlogPost = {
  title: string
  slug: string
  content: string
  excerpt: string
  date: string
  tags: Array<string>
  cover: {
    image: string
    alt: string
    width: number
    height: number
  }
}
