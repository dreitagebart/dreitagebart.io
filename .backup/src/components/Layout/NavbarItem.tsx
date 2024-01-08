import Link from 'next/link'
import { createStyles, Text, UnstyledButton } from '@mantine/core'
import { FC } from 'react'

interface Props {
  href: string
  children: string
  active: boolean
}

interface StyleParams {
  active: boolean
}

const useStyles = createStyles((theme, { active }: StyleParams) => ({
  item: {
    fontSize: 20,
    letterSpacing: 1,
    color:
      theme.colorScheme === 'light'
        ? active
          ? theme.colors.spin[6]
          : theme.colors.spin[6]
        : active
        ? theme.colors.spin[2]
        : theme.colors.spin[4],
    textShadow: active
      ? `0px 0px 2px ${
          theme.colorScheme === 'light'
            ? theme.colors.spin[4]
            : theme.colors.spin[2]
        }`
      : undefined,
    transition: 'all 300ms ease-in-out',
    ':hover': {
      textShadow: `0px 0px 2px ${
        theme.colorScheme === 'light'
          ? theme.colors.cyan[4]
          : theme.colors.cyan[8]
      }`,
      color:
        theme.colorScheme === 'light'
          ? theme.colors.cyan[9]
          : theme.colors.cyan[6]
    }
  }
}))

export const NavbarItem: FC<Props> = ({ href, children, active }) => {
  const { classes } = useStyles({ active })

  return (
    <Link href={href}>
      <UnstyledButton>
        <Text className={classes.item}>{children}</Text>
      </UnstyledButton>
    </Link>
  )
}
