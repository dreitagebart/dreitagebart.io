import { Text, Title, useMantineTheme } from '@mantine/core'
import { FC, ReactNode } from 'react'

interface Props {
  marginBottom?: boolean
  children: string | ReactNode
}

export const PageTitle: FC<Props> = ({ children, marginBottom = false }) => {
  const theme = useMantineTheme()

  return (
    <Title
      order={1}
      sx={{
        marginTop: -20,
        marginBottom: marginBottom ? 12 : 0,
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
      <Text
        component='span'
        sx={{
          letterSpacing: 4,
          fontWeight: 800,
          // fontSize: '2rem',
          color:
            theme.colorScheme === 'light'
              ? theme.colors.cyan[6]
              : theme.colors.cyan[4]
        }}
      >
        /
      </Text>
      {children}
    </Title>
  )
}
