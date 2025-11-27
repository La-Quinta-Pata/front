import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:opacity-80 transition-all hover:scale-105">
          Quiénes Somos
        </Link>
        <Link to="/" className="hover:opacity-80 transition-all hover:scale-105">
          Acerca
        </Link>
        <Link to="/catalogo" className="hover:opacity-80 transition-all hover:scale-105">
          Catálogo
        </Link>
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center gap-1">
        <span className={`block h-1 w-6 bg-lime-500 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-1 w-6 bg-lime-500 transition-all ${open ? "opacity-0" : ""}`}></span>
        <span className={`block h-1 w-6 bg-lime-500 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 md:hidden z-50">
          <Link 
            to="/" 
            onClick={() => setOpen(false)}
            className="text-lg hover:opacity-80 transition-all hover:scale-105">
            Quiénes Somos
          </Link>

          <Link 
            to="/" 
            onClick={() => setOpen(false)}
            className="text-lg hover:opacity-80 transition-all hover:scale-105">
            Acerca
          </Link>

          <Link 
            to="/catalogo" 
            onClick={() => setOpen(false)}
            className="text-lg hover:opacity-80 transition-all hover:scale-105">
            Catálogo
          </Link>
        </div>
      )}
    </>
  )
}

export default Navbar