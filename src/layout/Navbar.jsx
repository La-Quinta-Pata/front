import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("/")} className='mr-4 hover:opacity-80 transition-all hover:scale-105'>Quiénes Somos</button>
        <button onClick={()=>navigate("/")} className='mr-4 hover:opacity-80 transition-all hover:scale-105'>Acerca</button>
        <button onClick={()=>navigate("/")} className=' hover:opacity-80 transition-all hover:scale-105'>Catálogo</button>
    </div>
  )
}

export default Navbar