import { Box, Divider, Text, rem } from '@mantine/core'
import { FC } from 'react'
import { PageBreak } from './PageBreak'

export const Chapter: FC<{ label: string }> = ({ label }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Box sx={{ position: 'absolute', marginTop: rem(80) }}>
        <Divider w={210} size={10} color='gray'></Divider>
        <Text
          sx={(theme) => ({
            fontWeight: 500,
            color: theme.colors.gray[5],
            fontSize: rem(90)
          })}
        >
          {label}
        </Text>
      </Box>
      <PageBreak></PageBreak>
    </Box>
  )
}
