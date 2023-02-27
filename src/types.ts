interface OpenGraphProps {
  title: string
  description: string
  locale: string
  siteName: string
  url: string
  type: 'website' | 'article'
}

export type NavbarItem = {
  label: string
  href: string
}

export type NavbarItems = Array<NavbarItem>

export type OpenGraph = Partial<OpenGraphProps>
