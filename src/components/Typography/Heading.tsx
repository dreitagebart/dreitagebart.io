import {
  Anchor,
  Text,
  Title,
  TitleOrder,
  TitleProps,
  Tooltip,
  useMantineTheme
} from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props extends TitleProps {
  id?: string
  order?: 1 | 2 | 3
  children: string | ReactNode
}

export const Heading: FC<Props> = ({ order = 1, children, id, ...props }) => {
  const theme = useMantineTheme()

  return (
    <Tooltip
      styles={{
        tooltip: {
          fontSize:
            order === 1
              ? theme.headings.sizes.h3.fontSize
              : order === 2
              ? theme.headings.sizes.h4.fontSize
              : order === 3
              ? theme.headings.sizes.h5.fontSize
              : undefined,
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
      <Anchor sx={{ ':hover': { textDecoration: 'none' } }} href={`#${id}`}>
        <Title
          {...props}
          id={id}
          order={(order + 1) as TitleOrder}
          sx={{
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
          {children}
        </Title>
      </Anchor>
    </Tooltip>
  )
}
