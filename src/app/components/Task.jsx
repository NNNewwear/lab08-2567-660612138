import React from 'react'

export default function Task({task}) {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>{task.title}</span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
    </div>
  )
}
