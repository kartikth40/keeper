import React from "react"

function Note(props) {
  function handleClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h2 className="note-heading">{props.title}</h2>
      <div className="note-content">{props.content}</div>
      <button className="delete-btn" onClick={handleClick}></button>
    </div>
  )
}

export default Note
