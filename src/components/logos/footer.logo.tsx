import { Group, Stack, Text } from '@mantine/core'
import { IconBlade } from '@tabler/icons-react'
import { swingFont } from '~/styles/fonts'

export const FooterLogo = () => {
  return (
    <Stack gap={0} style={{ userSelect: 'none' }}>
      <Group gap={0}>
        <IconBlade size={54} stroke={0.9} color='#36585D80' />
        <Text
          component='div'
          ff={swingFont.style.fontFamily}
          size='xl'
          variant='gradient'
          gradient={{ from: 'brand.0', to: 'brand.9', deg: 100 }}>
          dreitagebart
        </Text>
      </Group>
      <Text size='xs' ml={56}>
        The sharp edge for your software
      </Text>
    </Stack>
  )
}
