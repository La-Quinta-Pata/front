import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar';
import logo from '../assets/images/Logo_macmm.png'

function Header() {
  return (
    <header className="bg-[#FCBF49]/30 relative">
      <section className="w-full h-2 bg-[#FCBF49]/"></section>

      <section className="container mx-auto px-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
          <img
            alt='Logo memorias migrantes'
            className="h-20 w-auto sm:h-20 md:h-16 lg:h-20 object-contain drop-shadow-lg"
            src={logo}
          />
        </Link>
        <Navbar />
      </section>
    </header>
  )
}

export default Header