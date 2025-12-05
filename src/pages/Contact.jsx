import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 gap-6 sm:gap-8">

      <header className="text-center">
        <h2 className="text-3xl mb-8 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003049] tracking-tight">
          ¿Dónde nos encuentras?
        </h2>
      </header>

      <article
        className="w-full max-w-2xl bg-gradient-to-br from-[#FFF8DC] to-[#FFE4B5]
        border-t-8 border-orange-500 rounded-[3rem] shadow-2xl
        p-8 sm:p-12 md:p-16"
        aria-labelledby="location-heading"
      >
        <header className="text-center mb-8 sm:mb-12">
          <h3
            id="location-heading"
            className="text-lg sm:text-2xl md:text-2xl lg:text-4xl font-bold text-[#003049] tracking-tight"
          >
            Barcelona
          </h3>
        </header>

        <address className="not-italic">
          <ul className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg md:text-xl text-gray-900">

            <li className="flex items-center gap-4 sm:gap-6">
              <MapPin
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-medium">Carrer Robador 25-27 Raval</span>
            </li>

            <li className="flex items-center gap-4 sm:gap-6">
              <Phone
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 flex-shrink-0"
                aria-hidden="true"
              />
              <a
                href="tel:+34672881452"
                className="font-medium hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded"
              >
                +34 672-881-452
              </a>
            </li>

            <li className="flex items-center gap-4 sm:gap-6">
              <Mail
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-600 flex-shrink-0"
                aria-hidden="true"
              />
              <a
                href="mailto:laquintapataasociacion@gmail.com"
                className="font-medium hover:text-orange-600 transition-colors duration-200 break-all focus:outline-none focus:ring-4 focus:ring-orange-300 rounded"
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