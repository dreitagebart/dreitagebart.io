'use client'

import { Text, Title } from '@mantine/core'

export const components = {
  Text: Text.extend({
    defaultProps: {
      c: 'gray.3'
    }
  }),
  Title: Title.extend({
    defaultProps: {
      c: 'gray.1'
    }
  })
}
