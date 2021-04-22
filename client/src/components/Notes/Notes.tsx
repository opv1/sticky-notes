import React from 'react'
import { useAppStore } from 'context'
import Form from 'components/Form/Form'
import Note from 'components/Note/Note'
import 'components/Notes/Notes.scss'

const Notes: React.FC = () => {
  const { notesStore } = useAppStore()

  return (
    <div className='notes'>
      <Form />
      {notesStore.notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  )
}

export default Notes
