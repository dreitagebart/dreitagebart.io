import Link from 'next/link'
import { FC } from 'react'
import { createStyles, Box, Text, Group, rem } from '@mantine/core'
import { ListSearch } from 'tabler-icons-react'
import { useSticky } from 'react-use-sticky'
import { useMediaQuery } from '@mantine/hooks'

import { useScrollSpy } from '../../hooks'
import { Stack } from '@mantine/core'

const LINK_HEIGHT = 38
const INDICATOR_SIZE = 10
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: rem(LINK_HEIGHT),
    fontSize: theme.fontSizes.sm,
    height: rem(LINK_HEIGHT),
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(2)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    }
  },
  linkActive: {
    fontWeight: 500,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7]
  },
  links: {
    position: 'relative'
  },
  indicator: {
    transition: 'transform 150ms ease',
    border: `${rem(2)} solid ${
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7]
    }`,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    height: rem(INDICATOR_SIZE),
    width: rem(INDICATOR_SIZE),
    borderRadius: rem(INDICATOR_SIZE),
    position: 'absolute',
    left: `calc(-${rem(INDICATOR_SIZE)} / 2 + ${rem(1)})`
  }
}))

interface Props {
  offset?: number
  links: Array<{ label: string; id: string; order: number }>
}

export const TOC: FC<Props> = ({ links, offset }) => {
  const largeScreen = useMediaQuery('(min-width: 48em)', true, {
    getInitialValueInEffect: false
  })
  const [headerBarRef, sticky] = useSticky<HTMLDivElement>()
  const { id, index } = useScrollSpy(
    links.map((link) => link.id),
    offset
  )
  const { classes, cx } = useStyles()

  const items = links.map((item) => (
    <Box
      component={Link}
      href={`#${item.id.replace('sec-', '')}`}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: id === item.id })}
      sx={(theme) => ({
        paddingLeft: `calc(${item.order} * ${theme.spacing.lg})`
      })}
    >
      {item.label}
    </Box>
  ))

  return (
    <div
      ref={headerBarRef}
      style={{
        display: largeScreen ? 'block' : 'none',
        position: 'sticky',
        top: 20
      }}
    >
      <Stack
        sx={{
          '@media print': {
            display: 'none'
          },
          width: 300
        }}
      >
        <Group mb='md'>
          <ListSearch size={20}></ListSearch>
          <Text>Table of contents</Text>
        </Group>
        <div className={classes.links}>
          <div
            className={classes.indicator}
            style={{
              transform: `translateY(${rem(
                index * LINK_HEIGHT + INDICATOR_OFFSET
              )})`
            }}
          />
          {items}
        </div>
      </Stack>
    </div>
  )
}
