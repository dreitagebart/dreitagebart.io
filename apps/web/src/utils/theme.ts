'use client'

import cx from 'clsx'
import { Container, MantineThemeOverride, createTheme } from '@mantine/core'

import classes from './theme.module.css'

export const theme: MantineThemeOverride = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer!]: size === 'responsive' })
      })
    })
  }
})
