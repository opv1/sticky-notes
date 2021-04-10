import { NoteType } from 'types'

export const getNotes = (): Promise<NoteType[]> => {
  return fetch('/api/notes').then((res) => res.json())
}

export const postNotes = (notes: NoteType[]) => {
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notes),
  }).then((res) => res.json())
}
