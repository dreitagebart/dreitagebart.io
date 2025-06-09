import { Group, Paper, Stack } from '@mantine/core'
import { LoginForm } from '~/components/forms'
import { DreitagebartLogo } from '~/components/logos'

export const LoginView = () => {
  return (
    <Stack gap={0} align='flex-end'>
      <Group mr='lg'>
        <DreitagebartLogo />
      </Group>
      <Paper
        shadow='xl'
        bg='#000000'
        p='xl'
        radius={8}
        style={{
          border: '1px solid var(--mantine-color-dark-9)'
        }}>
        <LoginForm />
      </Paper>
    </Stack>
  )
}
