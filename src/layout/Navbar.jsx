import React from 'react'
import { Link, useNavigate } from 'react-router'

function Navbar() {
  return (
    <nav>
        <Link to="/" className='mr-4 hover:opacity-80 transition-all hover:scale-105'>Quiénes Somos</Link>
        <Link to="/" className='mr-4 hover:opacity-80 transition-all hover:scale-105'>Acerca</Link>
        <Link to="/" className='hover:opacity-80 transition-all hover:scale-105'>Catálogo</Link>
    </nav>
  )
}

export default Navbar