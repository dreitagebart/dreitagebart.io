import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useFNT = () => {
  const router = useRouter()
  const { data: session, status } = useSession({ required: true })

  useEffect(() => {
    if (session && session.user && session.user.username !== 'fnt') {
      debugger
      router.push('/auth/login')
    }
  }, [router, session])

  return {
    user: session?.user,
    status
  }
}
