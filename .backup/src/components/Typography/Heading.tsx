import {
  Anchor,
  Text,
  TitleProps,
  Tooltip,
  useMantineTheme
} from '@mantine/core'
import { FC, ReactNode, useCallback } from 'react'

type TitleOrder = 1 | 2 | 3

interface Props extends TitleProps {
  id: string
  order?: TitleOrder
  children: string | ReactNode
}

export const Heading: FC<Props> = ({ order = 1, children, id, ...props }) => {
  const theme = useMantineTheme()

  const getSize = useCallback(
    (order: TitleOrder) => {
      return order === 1
        ? theme.headings.sizes.h3.fontSize
        : order === 2
        ? theme.headings.sizes.h4.fontSize
        : order === 3
        ? theme.headings.sizes.h5.fontSize
        : undefined
    },
    [theme]
  )

  return (
    <Tooltip
      styles={{
        tooltip: {
          fontSize: getSize(order),
          color: theme.colors.cyan[4],
          padding: 0,
          margin: 0,
          background: 'none'
        }
      }}
      transitionProps={{ transition: 'slide-right', duration: 300 }}
      withinPortal
      position='left'
      label={<Text component='span'>#</Text>}
    >
      <Text
        {...props}
        id={id}
        sx={{
          display: 'inline-block',
          fontSize: getSize(order),
          textShadow: `0px 0px 2px ${
            theme.colorScheme === 'light'
              ? theme.colors.spin[4]
              : theme.colors.spin[2]
          }`,
          color:
            theme.colorScheme === 'light'
              ? theme.colors.gray[8]
              : theme.colors.gray[0]
        }}
      >
        <Anchor
          sx={{ color: 'initial', ':hover': { textDecoration: 'none' } }}
          href={`#${id}`}
        >
          {children}
        </Anchor>
      </Text>
    </Tooltip>
  )
}
