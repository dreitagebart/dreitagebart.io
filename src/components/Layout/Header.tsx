import { Box, BoxProps, Group } from '@mantine/core'
import { FC } from 'react'

import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { Pod } from './Pod'

interface Props extends BoxProps {}

export const Header: FC<Props> = ({ ...props }) => {
  return (
    <Box component='header' {...props}>
      <Pod>
        <Group position='apart'>
          <Logo></Logo>
          <Navbar></Navbar>
        </Group>
      </Pod>
    </Box>
  )
}
