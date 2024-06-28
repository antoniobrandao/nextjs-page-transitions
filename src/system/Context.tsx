import { createContext } from 'react'

type Size = {
  width: number | null
  height: number | null
}

const defaultValue = {
  windowSize: {} as Size,
}

const Context = createContext(defaultValue)

export default Context
