import { ActionIcon, Box, Portal } from '@mantine/core'
import {
  useScrollIntoView,
  useWindowEvent,
  useWindowScroll
} from '@mantine/hooks'
import { FC, useState } from 'react'
import { ChevronUp } from 'tabler-icons-react'

interface Props {}

let lastScrollTop = 0

export const ScrollToTop: FC<Props> = () => {
  const { scrollIntoView } = useScrollIntoView({ axis: 'y' })
  const [visible, setVisible] = useState(false)

  useWindowEvent('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop

    if (window.scrollY <= 80) {
      return setVisible(false)
    }

    if (st > lastScrollTop) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
  })

  return (
    <Portal>
      <Box
        pos='fixed'
        right={40}
        bottom={40}
        sx={{
          transition: 'all 500ms ease-out',
          visibility: visible ? 'visible' : 'hidden',
          opacity: visible ? 1 : 0
        }}
      >
        <ActionIcon
          variant='transparent'
          sx={(theme) => ({
            transition: 'background 500ms ease-out',
            backgroundColor: theme.colors.spin[6],
            ':hover': {
              backgroundColor: theme.colors.spin[8]
            }
          })}
          radius='xl'
          size={40}
          onClick={() => scrollIntoView({ alignment: 'start' })}
        >
          <ChevronUp size={40} color='white'></ChevronUp>
        </ActionIcon>
      </Box>
    </Portal>
  )
}
