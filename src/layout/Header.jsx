import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar';
import logo from '../assets/images/logom.webp'

function Header() {
  return (
    <header className="bg-[#FCBF49]/30 relative">
      <section className="w-full h-2 bg-[#FCBF49]/"></section>

      <section className="container mx-auto px-2 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
          <img
            alt='Logo memorias migrantes'
            className="h-24 w-24 sm:h-32md:h-40 md:w-40 lg:h-56 lg:w-56 object-contain drop-shadow-lg"
            src={logo}
          />
        </Link>
        <Navbar />
      </section>
    </header>
  )
}

export default Header