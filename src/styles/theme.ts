import { MantineThemeOverride } from '@mantine/core'
import { Albert_Sans, Caveat } from 'next/font/google'

import { spin, cadet, delft } from './colors'

export const baseFont = Albert_Sans({ subsets: ['latin'] })
export const handwritingFont = Caveat({ subsets: ['latin'] })

export const theme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    '@media print': {
      '@page': {
        size: 'A4 portrait',
        margin: '20mm'
      },
      h1: {
        display: 'none',
        paddingTop: theme.spacing.lg
      },
      header: {
        display: 'none'
      },
      footer: {
        display: 'none'
      }
    },
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
    },
    a: {
      color: 'inherit',
      textDecoration: 'none'
    },
    body: {
      backgroundColor:
        theme.colorScheme === 'light' ? '#ffffff' : theme.colors.spin[9]
    }
  }),
  primaryShade: 5,
  primaryColor: 'cyan',
  fontFamily: baseFont.style.fontFamily,
  fontSizes: {
    xl: '36px',
    lg: '24px',
    md: '18px',
    sm: '16px',
    xs: '14px'
  },
  colors: {
    spin,
    cadet,
    delft
  },
  headings: {
    fontWeight: 400,
    fontFamily: baseFont.style.fontFamily,
    sizes: {
      h1: { fontSize: '3rem' },
      h2: { fontSize: '2.2rem' },
      h3: { fontSize: '1.8rem' },
      h4: { fontSize: '1.6rem' },
      h5: { fontSize: '1.4rem' },
      h6: { fontSize: '1.2rem' }
    }
  }
}
