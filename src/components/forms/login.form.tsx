'use client'

import {
  Button,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import {
  IconBrandGithubFilled,
  IconLock,
  IconLogin,
  IconUserCheck
} from '@tabler/icons-react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

type Props = {}

type FormValues = {
  username: string
  password: string
}

export const LoginForm: FC<Props> = () => {
  const router = useRouter()
  const { values, onSubmit, setFieldValue, errors } = useForm<FormValues>({
    initialValues: {
      username: '',
      password: ''
    }
  })
  const handleSubmit = (values: FormValues) => {
    signIn('credentials', {
      username: values.username,
      password: values.password,
      redirect: false
    }).then((response) => {
      notifications.show({
        title: 'Hey',
        message: 'Welcome back!'
      })
      router.push('/')
    })
  }

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Stack>
        <Text p='lg' c='dimmed' size='sm'>
          Login with your dedicated user account
        </Text>
        <TextInput
          leftSection={<IconUserCheck />}
          placeholder='Username'
          value={values.username}
          onChange={(e) => setFieldValue('username', e.target.value)}
        />
        <Group>
          <PasswordInput
            flex={1}
            leftSection={<IconLock />}
            placeholder='Password'
            value={values.password}
            onChange={(e) => setFieldValue('password', e.target.value)}
          />
          <Button variant='light' type='submit' leftSection={<IconLogin />}>
            Login
          </Button>
        </Group>
        <Divider label='OR' my='lg' />
        <Button
          leftSection={<IconBrandGithubFilled size={42} />}
          variant='gradient'
          gradient={{ from: 'brand.0', to: 'brand.9', deg: 290 }}>
          login with github
        </Button>
      </Stack>
    </form>
  )
}
