import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRestrictedArea = (username: string) => {
  const router = useRouter()
  const { data: session, status } = useSession({ required: true })

  useEffect(() => {
    if (session && session.user && session.user.username !== username) {
      router.push('/login')
    }
  }, [router, session, username])

  return {
    user: session?.user,
    loading: status === 'loading'
  }
}
