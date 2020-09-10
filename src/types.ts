export interface PauseProps {
  paused: boolean
}

interface SEO {
  title: string
  keywords: string
}

export type SEOProps = Partial<SEO>
