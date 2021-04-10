import React from 'react'
import { observer } from 'mobx-react'
import Container from 'components/Container/Container'
import Notes from 'components/Notes/Notes'
import 'App.scss'

const App: React.FC = () => {
  const dragOver = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const ObservedNotes = observer(Notes)

  return (
    <div className='app' onDragOver={dragOver}>
      <Container />
      <ObservedNotes />
    </div>
  )
}

export default App
