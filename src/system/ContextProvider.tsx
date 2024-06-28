'use client'

import React from 'react'
import { ReactNode } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import SectionContext from './Context'

type ProviderProps = {
  children: ReactNode
}

const SectionProvider = (props: ProviderProps ) => {
  const size = useWindowSize()
  return (
    <SectionContext.Provider
      value={{
        windowSize: size,
      }}
    >
      {props.children}
    </SectionContext.Provider>
  )
}

export default SectionProvider
