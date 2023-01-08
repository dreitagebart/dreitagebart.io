import { DefaultMantineColor, Tuple } from '@mantine/core'

type ExtendedColors = 'brand' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColors, Tuple<string, 10>>
  }
}

export const brand: Tuple<string, 10> = [
  '#e2f6ff',
  '#bde0f4',
  '#97cae7',
  '#70b5dc',
  '#4a9fd0',
  '#3286b7',
  '#23688f',
  '#164a67',
  '#052d40',
  '#00111a'
]
