import { Button, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { NextPage } from 'next'
import { signIn, SignInResponse, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, useCallback } from 'react'
import { Key, Login, User } from 'tabler-icons-react'

import { Layout, PageTitle, Pod, SubTitle } from '../components'

const Page: FC<NextPage> = () => {
  const router = useRouter()
  const { status } = useSession()
  const { values, onSubmit, setFieldValue } = useForm({
    initialValues: {
      username: '',
      password: ''
    }
  })

  if (status === 'authenticated') {
    router.push('/')
  }

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(event.target.name, event.target.value)
    },
    [setFieldValue]
  )

  const handleSubmit = useCallback(
    (formValues: typeof values) => {
      const { username, password } = formValues

      signIn('credentials', {
        username,
        password,
        redirect: false
      }).then((response: SignInResponse | undefined) => {
        debugger
        if (response && response.ok) {
          debugger
          router.push(`/${username}`)
        }
      })
    },
    [router]
  )

  return (
    <Layout title='Login'>
      <Pod>
        <PageTitle>Login</PageTitle>
        <SubTitle>
          Please login with your provided password to gain full access...
        </SubTitle>
        <form onSubmit={onSubmit(handleSubmit)}>
          <Stack
            spacing='xl'
            maw={420}
            p='xl'
            sx={(theme) => ({
              borderRadius: theme.radius.md,
              backgroundColor:
                theme.colorScheme === 'light'
                  ? theme.colors.spin[0]
                  : theme.colors.spin[8]
            })}
          >
            <TextInput
              icon={<User></User>}
              size='md'
              placeholder='Username'
              name='username'
              value={values.username}
              onChange={handleChange}
            ></TextInput>
            <TextInput
              type='password'
              icon={<Key></Key>}
              size='md'
              placeholder='Password'
              name='password'
              value={values.password}
              onChange={handleChange}
            ></TextInput>
            <Button leftIcon={<Login></Login>} type='submit'>
              Login
            </Button>
          </Stack>
        </form>
      </Pod>
    </Layout>
  )
}

export default Page
