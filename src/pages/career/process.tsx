import { ActionIcon, Box, Center, Group, Loader, Portal } from '@mantine/core'
import { NextPage } from 'next'
import { useEffect, useState, FC, useMemo } from 'react'
import { ExcalidrawProps } from '@excalidraw/excalidraw/types/types'
import { ArrowsDiagonal, ArrowsDiagonalMinimize2 } from 'tabler-icons-react'

import libArchitecture from '../../assets/excalidraw/libs/architecture-diagram-components.excalidrawlib'
import libDevops from '../../assets/excalidraw/libs/dev_ops.excalidrawlib'
import libItlogos from '../../assets/excalidraw/libs/it-logos.excalidrawlib'
import libStickFigures from '../../assets/excalidraw/libs/stick-figures.excalidrawlib'
import libNetwork from '../../assets/excalidraw/libs/network-topology-icons.excalidrawlib'
import process from '../../assets/excalidraw/process.excalidraw'
import { Layout, Pod } from '../../components'
import { useRestrictedArea } from '../../hooks'

const getLibraries = () => {
  let result: Array<any> = [].concat(
    libArchitecture.libraryItems,
    libDevops.libraryItems,
    libItlogos.libraryItems,
    libNetwork.libraryItems,
    libStickFigures.libraryItems
  )

  return result
}

const Page: NextPage = () => {
  const libraryItems = useMemo(getLibraries, [])
  const { loading } = useRestrictedArea('career')
  const [fullscreen, setFullscreen] = useState(false)
  const [Excalidraw, setExcalidraw] = useState<FC<ExcalidrawProps> | null>(null)

  useEffect(() => {
    import('@excalidraw/excalidraw').then((comp) =>
      setExcalidraw(comp.Excalidraw)
    )
  }, [])

  const renderEditor = () => {
    return Excalidraw ? (
      <Excalidraw
        theme='dark'
        renderTopRightUI={() => (
          <Group>
            <ActionIcon onClick={() => setFullscreen(!fullscreen)}>
              {fullscreen ? (
                <ArrowsDiagonalMinimize2></ArrowsDiagonalMinimize2>
              ) : (
                <ArrowsDiagonal></ArrowsDiagonal>
              )}
            </ActionIcon>
          </Group>
        )}
        initialData={{
          // files: [process],
          elements: process.elements,
          libraryItems
          // libraryItems: libArchitecture.libraryItems.concat(
          //   libCloud.libraryItems
          // )
        }}
      ></Excalidraw>
    ) : null
  }

  return (
    <Layout title='Process'>
      {loading ? (
        <Center px='xl'>
          <Loader size='xl'></Loader>
        </Center>
      ) : fullscreen ? (
        <Portal>
          <Box
            sx={{
              position: 'absolute',
              width: '100vw',
              height: '100vh',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            {renderEditor()}
          </Box>
        </Portal>
      ) : (
        <Pod sx={{ height: '60vh' }}>{renderEditor()}</Pod>
      )}
    </Layout>
  )
}

export default Page
