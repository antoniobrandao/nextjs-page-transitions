'use client'

import { ReactNode } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import Context from './Context'

type ProviderProps = {
  children: ReactNode
}

const ContextProvider = (props: ProviderProps ) => {
  const size = useWindowSize()
  return (
    <Context.Provider
      value={{
        windowSize: size,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
