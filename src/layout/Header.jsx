import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar';
import logo from '../assets/images/Logo_macmm.png'

function Header() {
  return (
    <header className="bg-[#7e3488] shadow-xl relative z-20">
      <section className="w-full h-2 bg-[#4b1252]/"></section>

      <section className="container mx-auto px-0 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105 font-fira text-xl text-[#fcd249]">
          ACMM
        </Link>
        <Navbar />
      </section>
    </header>
  )
}



export default Header