import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>This is about page</h1>
        <Link to="/Contact">Go to contact page</Link>
        <Link to="/">Go to home page</Link>
    </div>
  )
}
