import { makeAutoObservable } from 'mobx'
import { getNotes, postNotes } from 'api'
import { NoteType } from 'types'

export class NotesStore {
  notes: NoteType[] = []

  constructor() {
    makeAutoObservable(this)
  }

  loadNotes() {
    getNotes().then((notes) => (this.notes = notes))
  }

  saveNotes() {
    postNotes(this.notes)
  }

  addNote(note: NoteType) {
    this.notes.push(note)
  }

  removeNote(noteId: string) {
    const notes = this.notes.filter((note) => note.id !== noteId)
    this.notes = notes
  }
}
