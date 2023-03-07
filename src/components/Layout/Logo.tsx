import Image from 'next/image'
import Link from 'next/link'
import { Group, Text, UnstyledButton, useMantineTheme } from '@mantine/core'
import { FC } from 'react'

import profile from '../../assets/images/profile.jpg'
import { handwritingFont } from '../../styles/theme'

interface Props {}

export const Logo: FC<Props> = () => {
  const theme = useMantineTheme()

  return (
    <Link href='/'>
      <UnstyledButton>
        <Group py='md' spacing={8}>
          <Image
            src={profile}
            alt='profile'
            width={72}
            style={{
              borderRadius: '100%'
              // border: '3px solid #ffffff'
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
              size={48}
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
