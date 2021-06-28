import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import CreateArea from "./components/CreateArea"

function App() {
  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note]
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  console.log(notes)
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-container">
        {notes.map((noteItem, index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App

// Add note-
// constants for title and content
// pass new note back to the App
// add new note to the array
// take array and render each note

// Delete note-
// callback from the note component to trigger a delete function
// use the filter function to filter out the item that needs deletion
// Pass a id over to the note component, pass it back to the App when deletion
