import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 gap-6 sm:gap-8">

      <header className="text-center">
        <h2 className="text-base mb-6 sm:text-2xl md:text-2xl lg:text-3xl font-bold text-[#003049] tracking-tight">
          ¿Dónde nos encuentras?
        </h2>
      </header>

      <article
        className="w-full max-w-md bg-gradient-to-br from-[#FFF8DC] to-[#FFE4B5]
        border-t-8 border-[#D62828] rounded-[3rem] shadow-xl
        p-8 sm:p-10 md:p-10"
        aria-labelledby="location-heading"
      >
        <header className="text-center mb-8 sm:mb-12">
          <h3
            id="location-heading"
            className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-[#003049] tracking-tight"
          >
            Barcelona
          </h3>
        </header>

        <address className="not-italic">
          <ul className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl text-gray-900">

            <li className="flex items-center gap-4 sm:gap-6">
              <MapPin
                className="w-7 h-auto md:w-10 h-auto text-[#003049] flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-base">Carrer Robador 25-27 Raval</span>
            </li>

            <li className="flex items-center gap-4 sm:gap-6">
              <Phone
                className="w-7 h-auto md:w-10 h-auto text-[#003049] flex-shrink-0"
                aria-hidden="true"
              />
              <a
                href="tel:+34672881452"
                className="text-base hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded"
              >
                +34 672-881-452
              </a>
            </li>

            <li className="flex items-center gap-4 sm:gap-6">
              <Mail
                className="w-7 h-auto md:w-10 h-auto text-[#003049] flex-shrink-0"
                aria-hidden="true"
              />
              <a
                href="mailto:laquintapataasociacion@gmail.com"
                className="text-base hover:text-orange-600 transition-colors duration-200 break-all focus:outline-none focus:ring-4 focus:ring-orange-300 rounded"
              >
                laquintapataasociacion@gmail.com
              </a>
            </li>

          </ul>
        </address>
      </article>
    </main>
  );
}