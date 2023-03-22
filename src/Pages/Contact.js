import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <h1>This is contact page</h1>
        <Link to="/About">Go to about page</Link>
        <Link to="/">Go to home page</Link>
    </div>
  )
}
