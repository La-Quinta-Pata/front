import { SiFacebook, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] p-8 mt-auto">
      
      <section className="
        max-w-6xl mx-auto 
        flex flex-col md:flex-row 
        items-center md:items-start 
        justify-between 
        gap-10
      ">

        <section className="flex gap-6 items-center">
          <img
            alt="Logo proyecto"
            src="/src/assets/images/Logo_macmm.png"
            className="h-20 w-20 md:h-24 md:w-24 object-contain hover:scale-[1.20] transition"
          />
          <img
            alt="Logo La Quinta Pata"
            src="/logo5_pata.png"
            className="h-20 w-20 md:h-24 md:w-24 object-contain hover:scale-[1.20] transition"
          />
        </section>

        <nav className="
          flex flex-col 
          text-center text-[#003049] md:text-center
          gap-2 md:gap-3 
          text-sm md:text-base
        ">
          <Link to="/" className="hover:text-[#D25F00] hover:scale-[1.15] transition">Inicio</Link>
          <Link to="/catalogo" className="hover:text-[#D25F00] hover:scale-[1.15] transition">Catálogo</Link>
          <Link to="/quienes-somos" className="hover:text-[#D25F00] hover:scale-[1.15] transition">Quiénes Somos</Link>
          <Link to="/contacto" className="hover:text-[#D25F00] hover:scale-[1.15] transition">Contacto</Link>
        </nav>

        <section className="flex gap-4 text-[#0C1D36]">
          <Link
            to="https://www.facebook.com/asociacionlaquintapata"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition hover:scale-105"
          >
            <SiFacebook size={28} />
          </Link>
          
          <Link
            to="https://www.instagram.com/laquintapataasociacion"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition hover:scale-105"
          >
            <SiInstagram size={28} />
          </Link>

          <Link
            to="https://www.youtube.com/@quintapata781"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition hover:scale-105"
          >
            <SiYoutube size={28} />
          </Link>
        </section>

      </section>
    </footer>
  );
}
