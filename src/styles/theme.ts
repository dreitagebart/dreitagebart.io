import { MantineThemeOverride } from '@mantine/core'
import { Albert_Sans, Caveat } from 'next/font/google'

import { spin, cadet, delft } from './colors'

export const baseFont = Albert_Sans({ subsets: ['latin'] })
export const handwritingFont = Caveat({ subsets: ['latin'] })

export const theme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    '*': {
      scrollbarWidth: 'auto',
      scrollbarColor:
        theme.colorScheme === 'light'
          ? `${theme.colors.spin[0]} ${theme.colors.spin[9]}`
          : `${theme.colors.spin[0]} ${theme.colors.spin[9]}`
    },
    '*::-webkit-scrollbar': {
      width: 10
    },
    '*::-webkit-scrollbar-track': {
      backgroundColor:
        theme.colorScheme === 'light' ? '#ffffff' : theme.colors.spin[9]
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.spin[6]
          : theme.colors.spin[7],
      borderRadius: 0
      // border: '3px solid #ffffff'
    },
    body: {
      backgroundColor:
        theme.colorScheme === 'light' ? '#efefef' : theme.colors.spin[9]
    }
  }),
  primaryShade: 8,
  primaryColor: 'cadet',
  fontFamily: baseFont.style.fontFamily,
  fontSizes: {
    xl: 36,
    lg: 24,
    md: 18,
    sm: 16,
    xs: 14
  },
  colors: {
    spin,
    cadet,
    delft
  }
}
