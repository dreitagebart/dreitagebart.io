import { NextPage } from 'next'
import { Box, Stack, Text } from '@mantine/core'

import { handwritingFont } from '../../styles/theme'
import { useRestrictedArea } from '../../hooks'

const Page: NextPage = () => {
  useRestrictedArea('career')

  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'relative'
        }}
      >
        <Stack
          spacing={0}
          sx={{
            position: 'absolute',
            transformOrigin: 'bottom left',
            transform: 'rotate(-90deg) translateY(100%)',
            fontSize: 120,
            fontWeight: 700,
            bottom: 80,
            left: 0
          }}
        >
          <Text lh={1}>Stefan</Text>
          <Text lh={1}>Büchold</Text>
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            transformOrigin: 'bottom right',
            bottom: 80,
            right: 0,
            fontSize: 32,
            fontFamily: handwritingFont.style.fontFamily
          }}
        >
          Creating things that matter
        </Box>
      </Box>
    </>
  )
}

export default Page
