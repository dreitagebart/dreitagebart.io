import { Box, createStyles, Group } from '@mantine/core'
import { FC } from 'react'

import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { Pod } from './Pod'

interface Props {}

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.colors.gray[1],
    backgroundColor: theme.colors.brand[8]
  }
}))

export const Header: FC<Props> = () => {
  const { classes } = useStyles()

  return (
    <Box component='header' className={classes.root}>
      <Pod>
        <Group position='apart'>
          <Logo></Logo>
          <Navbar></Navbar>
        </Group>
      </Pod>
    </Box>
  )
}
