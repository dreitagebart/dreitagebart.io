import {
  useMantineColorScheme,
  SegmentedControl,
  Group,
  Center,
  Box,
  ColorScheme
} from '@mantine/core'
import { FC } from 'react'
import { Sun, Moon } from 'tabler-icons-react'

interface Props {}

export const ThemeSwitch: FC<Props> = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group>
      <SegmentedControl
        value={colorScheme}
        onChange={(value: ColorScheme) => toggleColorScheme(value)}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <Sun size={16} />
                <Box ml={10}>Light</Box>
              </Center>
            )
          },
          {
            value: 'dark',
            label: (
              <Center>
                <Moon size={16} />
                <Box ml={10}>Dark</Box>
              </Center>
            )
          }
        ]}
      />
    </Group>
  )
}
