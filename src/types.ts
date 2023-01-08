interface OpenGraphProps {
  title: string
  description: string
  locale: string
  siteName: string
  url: string
  type: 'website' | 'article'
}

export type OpenGraph = Partial<OpenGraphProps>
