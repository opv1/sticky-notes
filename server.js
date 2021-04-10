import express from 'express'
import path from 'path'
import cors from 'cors'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync.js'

const app = express()
const __dirname = path.resolve()
const PORT = process.env.PORT || 5000

let db = lowdb(new FileSync('db.json'))
db.defaults({ notes: [] }).write()

app.use(cors())
app.use(express.json())

app.get('/api/notes', (req, res) => {
  const notes = db.get('notes').value()
  return res.json(notes)
})

app.post('/api/notes', (req, res) => {
  const notes = req.body
  db.set('notes', notes).write()
  res.json({ success: true })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
