import React from 'react'
import { useNavigate } from 'react-router'
import Navbar from './Navbar';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="border-b-4 border-lime-500 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={()=> navigate("/")}
                className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
          <img alt='La Quinta Pata logo'  className="h-16 w-16 object-contain" src='/LaQuintaPataLogo.png'/>
        </button>
        <Navbar />
      </div>
    </header>
  )
}

export default Header