import { Divider } from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const PageBreak: FC<Props> = () => {
  return (
    <Divider
      sx={{
        '@media print': {
          opacity: 0,
          visibility: 'hidden',
          clear: 'both',
          pageBreakAfter: 'always'
        },
        '@media screen': {
          display: 'none'
        }
      }}
    ></Divider>
  )
}
