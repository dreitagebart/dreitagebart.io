import { SessionProvider } from 'next-auth/react'
import type { FC, ReactNode } from 'react'
import { BaseLayout } from '~/components/layout'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <BaseLayout>{children}</BaseLayout>
    </SessionProvider>
  )
}

export default Layout
