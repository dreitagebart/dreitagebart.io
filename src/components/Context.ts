import { createContext, SetStateAction } from "react"

// export interface Visible {
//   skills: boolean
//   about: boolean
//   contact: boolean
//   featured: boolean
//   blog: boolean
// }

interface AppContext {
  clicked: boolean
  hovered: boolean
  // visible: Visible
  // setVisible: React.Dispatch<SetStateAction<Visible>>
  setHovered: (hovered: boolean) => void
}

export const Context = createContext<AppContext>({
  clicked: false,
  // visible: {
  //   skills: false,
  //   about: false,
  //   contact: false,
  //   featured: false,
  //   blog: false
  // },
  hovered: false,
  setHovered: () => null
  // setVisible: () => {}
})

export const { Consumer, Provider } = Context
