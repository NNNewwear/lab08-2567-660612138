import React from 'react'

export default function TaskInput() {
  return (
    <div className="d-flex gap-1">
          <input
            className="form-control"
            placeholder="Insert a task here.."
          ></input>
          <button className="btn btn-primary">Add</button>
    </div>
  )
}
