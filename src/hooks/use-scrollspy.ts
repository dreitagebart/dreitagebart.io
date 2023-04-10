import { useLayoutEffect, useState } from 'react'

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value)

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil

export const useScrollSpy = (ids: Array<string>, offset: number = 0) => {
  const [activeId, setActiveId] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset

      const position = ids
        .map((id, index) => {
          const element = document.getElementById(id)

          if (!element) return { id, top: -1, bottom: -1 }

          const rect = element.getBoundingClientRect()
          const top = clamp(rect.top + scroll - offset)
          const bottom = clamp(rect.bottom + scroll - offset)

          return { id, top, bottom, index }
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom))

      setActiveId(position?.id || '')
      setActiveIndex(position?.index || 0)
    }

    listener()

    window.addEventListener('resize', listener)
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('resize', listener)
      window.removeEventListener('scroll', listener)
    }
  }, [ids, offset])

  return { id: activeId, index: activeIndex }
}
