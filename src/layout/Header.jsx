import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-white backdrop-blur-sm shadow-sm relative">
       <section className="w-full h-6 bg-[#ffffff]"></section>
      <section className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
          <img 
            alt='La Quinta Pata logo'  
            className="h-16 w-16 object-contain" 
            src='/logo5_pata.png'
          />
        </Link>
        <Navbar />
      </section>
    </header>
  )
}

export default Header