import GlobeExperience from "../map2/GlobeExperience";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <main className="w-full min-h-[40vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-15 py-8 sm:py-10 lg:py-0 bg-white text-black">
      <article className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
        <aside className="w-full max-w-md bg-[#f7e7f9] rounded-3xl border border-gray-100 p-5 sm:p-7 flex flex-col gap-5 sm:gap-7 text-center mx-auto lg:mx-0 lg:ml-10 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] order-2 lg:order-1">
          <p className="text-base sm:text-lg lg:text-xl text-[#4b1252] font-fira font-bold leading-relaxed text-center">
            {t("hero.title")}
          </p>

          <p className="text-sm sm:text-base lg:text-base text-gray-800 leading-relaxed text-justify">
            {t("hero.p1")}
          </p>

          <p className="text-sm sm:text-base lg:text-base text-gray-800 leading-relaxed text-justify">
            {t("hero.p2")}
          </p>
        </aside>

        <figure className="w-full lg:w-[70%] flex items-center justify-center order-1 lg:order-2">
          <div className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[650px] aspect-square">
            <GlobeExperience />
          </div>
        </figure>
      </article>
    </main>
  );
}