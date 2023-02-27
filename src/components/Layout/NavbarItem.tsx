import { Text, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  href: string
  children: string
  active: boolean
}

export const NavbarItem: FC<Props> = ({ href, children, active }) => {
  return (
    <Link href={href}>
      <UnstyledButton>
        <Text
          sx={(theme) => ({
            fontSize: 20,
            color: active ? theme.colors.spin[2] : theme.colors.spin[4],
            textShadow: active
              ? `0px 0px 3px ${theme.colors.spin[2]}`
              : undefined,
            transition: 'all 300ms ease-in-out',
            ':hover': {
              textShadow: `0px 0px 3px ${theme.colors.spin[4]}`,
              color:
                theme.colorScheme === 'light'
                  ? theme.colors.spin[2]
                  : theme.colors.spin[2]
            }
          })}
        >
          {children}
        </Text>
      </UnstyledButton>
    </Link>
  )
}
