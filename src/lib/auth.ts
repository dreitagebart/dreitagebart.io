import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {
          type: 'text'
        },
        password: {
          type: 'password'
        }
      },
      authorize: async (credentials) => {
        let user = null

        user = {
          email: 'stefan.buechold@gmail.com',
          name: 'dreitagebart'
        }

        return user
      }
    })
  ]
})
