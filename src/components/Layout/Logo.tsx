import Image from 'next/image'
import Link from 'next/link'
import { Group, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { FC } from 'react'
import { useMediaQuery } from '@mantine/hooks'

import profile from '../../assets/images/profile.jpg'
import { handwritingFont } from '../../styles/theme'

interface Props {}

export const Logo: FC<Props> = () => {
  const theme = useMantineTheme()
  const largeScreen = useMediaQuery('(min-width: 48em)', true, {
    getInitialValueInEffect: false
  })

  return (
    <Link href='/'>
      <UnstyledButton>
        <Group py='md' spacing={8}>
          <Image
            src={profile}
            alt='profile'
            width={largeScreen ? 72 : 52}
            style={{
              borderRadius: '100%'
            }}
          ></Image>
          <Group spacing='xs' align='baseline' sx={{ userSelect: 'none' }}>
            <Text
              color={
                theme.colorScheme === 'light'
                  ? theme.colors.spin[6]
                  : theme.colors.gray[1]
              }
              component='span'
              ff={handwritingFont.style.fontFamily}
              size={largeScreen ? 48 : 30}
            >
              dreitagebart
            </Text>
            <Text color='dimmed' lts={2}>
              .io
            </Text>
          </Group>
        </Group>
      </UnstyledButton>
    </Link>
  )
}
