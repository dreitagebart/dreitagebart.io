import { DefaultMantineColor, Tuple } from '@mantine/core'

type ExtendedColors = 'spin' | 'cadet' | 'delft' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedColors, Tuple<string, 10>>
  }
}

export const delft: Tuple<string, 10> = [
  '#e9f4ff',
  '#c4d9ef',
  '#9fbbdf',
  '#7a9dd2',
  '#547dc4',
  '#3b60ab',
  '#2d4885',
  '#203160',
  '#11203c',
  '#020d19'
]

export const cadet: Tuple<string, 10> = [
  '#e9f4ff',
  '#c6d7ee',
  '#a1b9dd',
  '#7d9acf',
  '#5879c0',
  '#3f5da7',
  '#304682',
  '#22305e',
  '#12203a',
  '#040d19'
]

export const spin: Tuple<string, 10> = [
  '#eff2f6',
  '#d0d6de',
  '#b0bac8',
  '#919fb5',
  '#7181a2',
  '#586689',
  '#444e69',
  '#32374b',
  '#1e212d',
  '#090b10'
]
