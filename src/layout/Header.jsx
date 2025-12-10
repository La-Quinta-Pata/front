import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar';
import logo from '../assets/images/Logo_macmm.png'

function Header() {
  return (
    <header className="bg-[#7e3488] shadow-xl relative z-20">
      <section className="w-full h-2 bg-[#4b1252]/"></section>

      <section className="container mx-auto px-0 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
          <img
            alt='Logo memorias migrantes'
            className="h-20 w-auto md:h-16 lg:h-22 object-contain drop-shadow-lg"
            src={logo}
          />
        </Link>
        <Navbar />
      </section>
    </header>
  )
}



export default Header