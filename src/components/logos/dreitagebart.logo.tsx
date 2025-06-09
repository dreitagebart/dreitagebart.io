import { Indicator, Text } from '@mantine/core'
import { swingFont } from '~/styles/fonts'

export const DreitagebartLogo = () => {
  return (
    <Text
      component='div'
      style={{ userSelect: 'none' }}
      ff={swingFont.style.fontFamily}
      size='xl'
      variant='gradient'
      gradient={{ from: 'brand.0', to: 'brand.9', deg: 100 }}>
      dreitagebart
      <Indicator
        mx={10}
        mb={1}
        size={8}
        position='bottom-end'
        color='teal.4'
        inline
        processing
      />
      io
    </Text>
  )
}
