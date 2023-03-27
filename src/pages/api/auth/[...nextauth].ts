import NextAuth, { AuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface Session {
    user: {
      name: string
      username: string
      image: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    name: string
    username: string
    image: string
  }
}

const users: Array<Record<'username' | 'password' | 'image', string>> =
  JSON.parse(process.env.USERS || '[]')

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout'
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      session.user.username = token.username

      return session
    },
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.name = user.name || ''
        token.username = user.id
        token.image = user.image || ''
      }

      return token
    }
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username' },
        password: { label: 'password' }
      },
      authorize: async (credentials, req) => {
        const user = users.find(
          (user) => user.username === credentials?.username
        )

        if (user) {
          const { password, ...withoutPassword } = user

          return { ...withoutPassword, id: user.username }
        } else {
          return null
        }
      }
    })
  ]
}

export default NextAuth(authOptions)
