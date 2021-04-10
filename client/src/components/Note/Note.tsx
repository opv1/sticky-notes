import React from 'react'
import { useAppStore } from 'context'
import { NoteType } from 'types'
import 'components/Note/Note.scss'

interface Props {
  note: NoteType
}

const Note: React.FC<Props> = ({ note }) => {
  const { notesStore } = useAppStore()

  const dropNote = (event: React.DragEvent) => {
    const target = event.target as HTMLDivElement

    target.style.left = `${event.pageX - 50}px`
    target.style.top = `${event.pageY - 50}px`
  }

  return (
    <div
      className='note'
      draggable='true'
      onDragEnd={dropNote}
      style={{ transform: `rotate(${note.rotate}deg)` }}
    >
      <div
        className='note__close'
        onClick={() => notesStore.removeNote(note.id)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <pre className='note__text'>{note.text}</pre>
    </div>
  )
}

export default Note
