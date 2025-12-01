import { SiFacebook, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons'
import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="border-t border-lime-500 bg-linear-to-r from-gray-50 to-gray-100 mt-auto p-4 md:p-6">
      <div className="flex flex-row justify-between items-center gap-4 md:gap-8">
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105">
          <img 
            alt='La Quinta Pata logo' 
            className="h-20 w-20 md:h-28 md:w-28 object-contain" 
            src='/logo5_pata.png' />
        </Link>
        <section className="flex justify-center gap-2 md:gap-4 items-center flex-wrap">
          <Link to="/" 
                className="text-xs md:text-base hover:opacity-80 transition-all hover:scale-105">Home</Link>
          <Link to="/" 
                className="text-xs md:text-base hover:opacity-80 transition-all hover:scale-105">Catálogo</Link>
          <Link to="/" 
                className="text-xs md:text-base hover:opacity-80 transition-all hover:scale-105">Quiénes Somos</Link>
          <Link to="/catalogo" 
                className="text-xs md:text-base hover:opacity-80 transition-all hover:scale-105">Contacto</Link>
        </section>
        <section className="flex gap-2 md:gap-4 items-center">
          <Link 
            to="https://www.facebook.com/asociacionlaquintapata" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all hover:scale-105">
            <SiFacebook size={28} className="w-7 h-7 md:w-10 md:h-10" />
          </Link>
          <Link 
            to="https://www.instagram.com/laquintapataasociacion" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all hover:scale-105">
            <SiInstagram size={28} className="w-7 h-7 md:w-10 md:h-10" />
          </Link>
          <Link 
            to="https://www.youtube.com/@quintapata781" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all hover:scale-105">
            <SiYoutube size={28} className="w-7 h-7 md:w-10 md:h-10" />
          </Link>
        </section>

      </div>
    </footer>
  )
}

export default Footer