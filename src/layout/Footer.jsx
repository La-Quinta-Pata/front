import { SiFacebook, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>

      <footer className="bg-[#7e3488] p-5 border-t-4 border-[#4b1252] shadow-[0_-6px_14px_rgba(0,0,0,0.12)]">
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
          text-center text-white uppercase md:text-center ]
          gap-2 md:gap-3 
          text-sm md:text-base
        ">
            <Link to="/" className="hover:text-[#fcd249] hover:scale-[1.15] transition">{t("common.home")}</Link>
            <Link to="/catalogo" className="hover:text-[#fcd249] hover:scale-[1.15] transition">{t("common.catalog")}</Link>
            <Link to="/quienes-somos" className="hover:text-[#fcd249] hover:scale-[1.15] transition">{t("common.about")}</Link>
            <Link to="/contacto" className="hover:text-[#fcd249] hover:scale-[1.15] transition">{t("common.contact")}</Link>
          </nav>

          <section className="flex gap-4 text-[#fcd249]">
            <Link
              to="https://www.facebook.com/asociacionlaquintapata"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition hover:scale-105"
            >
              <SiFacebook size={28} />
            </Link>

            <Link
              to="https://www.instagram.com/laquintapataasociacion"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition hover:scale-105"
            >
              <SiInstagram size={28} />
            </Link>

            <Link
              to="https://www.youtube.com/@quintapata781"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition hover:scale-105"
            >
              <SiYoutube size={28} />
            </Link>
          </section>

        </section>
      </footer> </>
  );
}
