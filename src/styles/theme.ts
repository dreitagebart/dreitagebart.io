import { MantineThemeOverride } from '@mantine/core'
import { Albert_Sans, Caveat } from '@next/font/google'

import { brand } from './colors'

export const baseFont = Albert_Sans({ subsets: ['latin'] })
export const handwritingFont = Caveat({ subsets: ['latin'] })

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: baseFont.style.fontFamily,
  fontSizes: {
    xl: 36,
    lg: 24,
    md: 18,
    sm: 16,
    xs: 14
  },
  colors: {
    brand
  }
}
