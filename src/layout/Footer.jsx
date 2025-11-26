import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="border-t border-lime-500 bg-gradient-to-r from-gray-50 to-gray-100 mt-auto flex">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
         <img alt='La Quinta Pata logo'  className="h-16 w-16 object-contain" src='/LaQuintaPataLogo.png'/>
      </Link>
      <div>
        <Link className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">Home</Link>
        <Link className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">Acerca</Link>
        <Link className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">Quines Somos</Link>
        <Link className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">Catálogo</Link>
      </div>
      <div>
        <Link to=""> </Link>
        <Link></Link>
        <Link></Link>
      </div>
    </footer>
  )
}

export default Footer