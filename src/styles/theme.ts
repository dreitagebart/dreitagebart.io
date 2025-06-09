import {
  type DefaultMantineColor,
  type MantineColorsTuple,
  createTheme,
  em,
  rem
} from '@mantine/core'
import { components } from './components'
import { baseFont, swingFont, titleFont } from './fonts'

type ExtendedCustomColors = 'brand' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}

export const theme = createTheme({
  components,
  colors: {
    brand: [
      '#36585D',
      '#2D5359',
      '#245056',
      '#1B4D54',
      '#124B52',
      '#094952',
      '#004953',
      '#073C43',
      '#0C3237',
      '#0F2A2E',
      '#102426',
      '#101F21',
      '#101A1C'
    ]
  },
  // autoContrast: false,
  primaryColor: 'brand',
  primaryShade: 1,
  fontFamily: baseFont.style.fontFamily,
  lineHeights: {
    md: '1.75'
  },
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(18),
    lg: rem(26),
    xl: rem(32)
  },
  headings: {
    fontFamily: swingFont.style.fontFamily,
    fontWeight: swingFont.style.fontWeight?.toString(),
    textWrap: 'wrap',
    sizes: {
      h1: { fontSize: rem(72) },
      h2: { fontSize: rem(64) },
      h3: { fontSize: rem(56) },
      h4: { fontSize: rem(42) },
      h5: { fontSize: rem(36) },
      h6: { fontSize: rem(24) }
    }
  }
})
