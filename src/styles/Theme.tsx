import {
  ColorSchemeProvider,
  ColorScheme,
  MantineProvider
} from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'
import { FC, ReactNode } from 'react'

import { theme } from './theme'

interface Props {
  children: ReactNode
}

export const Theme: FC<Props> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'dtb-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'))

  useHotkeys([['mod+l', () => toggleColorScheme()]])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...theme, colorScheme }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
