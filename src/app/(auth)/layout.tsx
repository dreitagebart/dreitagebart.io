import type { FC, ReactNode } from 'react'
import { AuthLayout } from '~/components/layout'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>
}

export default Layout
