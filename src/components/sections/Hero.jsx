import GlobeExperience from "../map2/GlobeExperience";
import ImagenInicio from '../../assets/images/img2.jpg';
import { useTranslation } from "react-i18next";

export default function Hero() {
  const {t} = useTranslation();
  return (
    <main className="w-full min-h-[50vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-10 py-0 bg-white text-black">

      <section className="relative w-full lg:w-[38%] flex flex-col items-center lg:items-start">

        <section className="relative z-0 w-66 h-56 lg:w-70 lg:h-60
            rounded-3xl overflow-hidden
            bg-white translate-y-8 shadow-[8px_8px_20px_rgba(0,0,0,0.25)]
          "
        >
          <figure className="w-full h-full">
            <img src={ImagenInicio}
              alt={t("hero.title")}
              className="w-full h-full object-cover opacity-30"
            />
          </figure>
        </section>

        <figcaption className="relative z-5
            w-full max-w-md bg-amber-50 rounded-3xl
            border border-gray-200
            px-7 py-4
            -mt-20
            flex flex-col gap-1 text-center
            mx-auto lg:mx-0 lg:ml-10
            shadow-[8px_8px_20px_rgba(0,0,0,0.25)]
          "
        >
          <h1
            className="
            text-xl lg:text-2xl font-bold tracking-wide 
            bg-linear-to-r from-[#D62828] to-[#F77F00]
            text-transparent bg-clip-text
            transition-all duration-300
            hover:scale-[1.03]"
          >
            {t("hero.title")}
          </h1>

          <p className="text-sm lg:text-base text-gray-800 leading-relaxed text-justify">
            {t("hero.subtitle")}
          </p>

          <button
            className="mt-1 px-6 py-2 rounded-lg mx-auto
              text-white font-semibold text-sm lg:text-base bg-[#003049]
              shadow-md hover:shadow-lg hover:scale-[1.03]
              active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            {t("hero.button")}
          </button>
        </figcaption>
      </section>

      <section className="w-full lg:w-[70%] flex items-center justify-center mb-6 lg:mb-0">
        <section className="w-full max-w-[650px] aspect-square">
          <GlobeExperience />
        </section>
      </section>

    </main>
  );
}
