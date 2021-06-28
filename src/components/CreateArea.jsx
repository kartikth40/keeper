import React, { useState } from "react"

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }

  function addNote() {
    props.onAdd(note)
    setNote({
      title: "",
      content: "",
    })
  }

  function expand() {
    setExpanded(true)
  }

  return (
    <div className="note-input">
      {isExpanded ? (
        <input
          name="title"
          className="input-title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoComplete="off"
          type="text"
        />
      ) : null}

      <textarea
        name="content"
        onClick={expand}
        className="input-content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
      />
      <button className="add-btn" onClick={addNote}></button>
    </div>
  )
}

export default CreateArea
