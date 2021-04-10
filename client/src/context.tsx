import React, { createContext, useContext } from 'react'
import { NotesStore } from 'store/NotesStore'

type ContextType = {
  notesStore: NotesStore
}

const AppContext = createContext<ContextType>({} as ContextType)

const notesStore = new NotesStore()

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <AppContext.Provider value={{ notesStore }}>{children}</AppContext.Provider>
  )
}

export const useAppStore = () => useContext(AppContext)
