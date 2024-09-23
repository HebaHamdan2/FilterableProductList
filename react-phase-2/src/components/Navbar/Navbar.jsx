import React from 'react'
import './Navbar.css'
export default function Navbar({title}) {
  return (
    <>
        <nav>
            <h1>COELACANTH</h1>
            <h2 >{title.toUpperCase()}</h2>
        </nav>
    </>
  )
}
