import { SiFacebook, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons'
import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="border-t border-lime-500 bg-linear-to-r from-gray-50 to-gray-100 mt-auto p-6 flex flex-col md:flex-row md:justify-around md:items-center gap-8">
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all hover:scale-105 md:item-center">
        <img alt='La Quinta Pata logo' className="h-32 w-32 md:h-28 md:w-28 object-contain" src='/LaQuintaPataLogo.png' />
      </Link>
      <section className='flex justify-center md:justify-start gap-4 items-center'>
        <Link className=" hover:opacity-80 transition-all hover:scale-105">Home</Link>
        <Link className=" hover:opacity-80 transition-all hover:scale-105">Acerca</Link>
        <Link className=" hover:opacity-80 transition-all hover:scale-105">Quines Somos</Link>
        <Link className=" hover:opacity-80 transition-all hover:scale-105">Catálogo</Link>
      </section>
      <section className='flex gap-4 items-center'>
        <Link to="" className='hover:opacity-80 transition-all hover:scale-105'><SiFacebook size={36} /> </Link>
        <Link to="" className='hover:opacity-80 transition-all hover:scale-105'><SiInstagram size={40} /></Link>
        <Link to="" className='hover:opacity-80 transition-all hover:scale-105'><SiYoutube size={40} /> </Link>
      </section>
    </footer>
  )
}

export default Footer