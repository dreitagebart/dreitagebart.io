import { Group, Text, Tooltip, createStyles, rem } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const useStyles = createStyles((theme) => ({
  tldr: {
    fontSize: rem(60),
    fontWeight: 'bold',
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[1]
        : theme.colors.gray[0]
  },
  text: {
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      marginRight: rem(120)
    },
    borderRadius: theme.radius.md,
    padding: rem(20),
    color:
      theme.colorScheme === 'light'
        ? theme.colors.dark[4]
        : theme.colors.gray[1],
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.colors.gray[2]
        : theme.colors.dark[9]
  }
}))

export const Tldr: FC<Props> = ({ children }) => {
  const { classes, theme } = useStyles()

  return (
    <Group align='flex-start' noWrap>
      <Tooltip
        offset={-10}
        color={theme.colorScheme === 'light' ? 'gray' : 'dark'}
        position='top'
        label="[too long; didn't read]"
        transitionProps={{ transition: 'skew-down', duration: 400 }}
      >
        <Text className={classes.tldr}>tl;dr</Text>
      </Tooltip>
      <Group className={classes.text}>
        <Text fz='lg'>{children}</Text>
      </Group>
    </Group>
  )
}
