import GlobeExperience from "../map2/GlobeExperience";
import ImagenInicio from '../../assets/images/img2.jpg';
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <main className="w-full min-h-[40vh] flex flex-col items-center justify-center px-6 lg:px-15 py-0 bg-white text-black">
      <section className="w-full flex flex-col lg:flex-row items-center justify-center">
        <section className="relative w-full flex flex-col items-center lg:items-center">

          <figcaption className="relative z-5
              w-full max-w-md bg-[#f7e7f9] rounded-3xl
              border border-gray-100
              p-7
              flex flex-col gap-7 text-center
              mx-auto mt-8 lg:mx-0 lg:ml-10 lg:mt-0
              shadow-[0px_4px_8px_rgba(0,0,0,0.25)]
            "
          > <p className="text-sm lg:text-xl text-[#4b1252] font-fira font-bold leading-relaxed text-center">
              {t("hero.title")}
            </p>
            <p className="text-sm lg:text-base text-gray-800 leading-relaxed text-justify">
              {t("hero.p1")}
            </p>

            <p className="text-sm lg:text-base text-gray-800 leading-relaxed text-justify">
              {t("hero.p2")}
            </p>

          </figcaption>
        </section>

        <section className="w-full lg:w-[70%] flex items-center justify-center lg:mb-0">
          <section className="w-full max-w-[650px] aspect-square">
            <GlobeExperience />
          </section>
        </section>
      </section>

    </main>
  );
}