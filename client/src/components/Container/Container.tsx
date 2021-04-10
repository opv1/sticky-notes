import React from 'react'
import { useAppStore } from 'context'
import 'components/Container/Container.scss'

const Container: React.FC = () => {
  const { notesStore } = useAppStore()

  return (
    <div className='container'>
      <h1 className='container__title'>Stycky Notes</h1>
      <div className='container__block'>
        <button
          className='container__button'
          onClick={() => notesStore.loadNotes()}
        >
          Load
        </button>
        <button
          className='container__button'
          onClick={() => notesStore.saveNotes()}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Container
