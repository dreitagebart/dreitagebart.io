import { Box, BoxProps, Group, useMantineTheme } from '@mantine/core'
import { FC } from 'react'

import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { Pod } from './Pod'
import { Wave } from './Wave'

interface Props extends BoxProps {}

export const Header: FC<Props> = ({ ...props }) => {
  const theme = useMantineTheme()
  const color =
    theme.colorScheme === 'light' ? theme.colors.spin[2] : theme.colors.spin[8]

  return (
    <>
      <Box component='header' {...props} sx={{ backgroundColor: color }}>
        <Pod>
          <Group position='apart'>
            <Logo></Logo>
            <Navbar></Navbar>
          </Group>
        </Pod>
      </Box>
      <Wave color={color}></Wave>
    </>
  )
}
