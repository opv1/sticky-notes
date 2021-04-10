import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppStore } from 'context'
import 'components/Form/Form.scss'

const Form: React.FC = () => {
  const { notesStore } = useAppStore()
  const [value, setValue] = useState<string>('')

  const onAddNote = (event: React.FormEvent) => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      text: value,
      rotate: Math.floor(Math.random() * 20),
    }

    notesStore.addNote(newNote)

    setValue('')
  }

  return (
    <form className='form' onSubmit={onAddNote}>
      <textarea
        className='form__textarea'
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder='Create a new note...'
        autoFocus
      />
      <button className='form__button' type='submit' disabled={!value.trim()}>
        Add
      </button>
    </form>
  )
}

export default Form
