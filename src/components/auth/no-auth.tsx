import { redirect } from 'next/navigation'
import type { FC, ReactNode } from 'react'
import { auth } from '~/lib/auth'

type Props = {
  children: ReactNode
}

export const NoAuth: FC<Props> = async ({ children }) => {
  const session = await auth()

  if (session) {
    return redirect('/')
  }

  return <>{children}</>
}
