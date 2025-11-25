import React from 'react'
import { useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate();
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={()=> navigate("/")}
                className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
          <img alt='La Quinta Pata logo'  className="h-16 w-16 object-contain" src='/LaQuintaPataLogo.png'/>
        </button>

        <div>here will be nav bars</div>
      </div>
    </header>
  )
}

export default Header