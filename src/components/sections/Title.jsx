import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();

  return (
    <section className="">
      <h1 className="bg-[#4b1252] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-center text-[#ffffff] uppercase flex flex-col gap-1">
        <span className="space-x-2 mt-5">
          
          <span><span className="font-black text-[1.1em] text-[#fcd249]">A</span>{t("hero.title2")}</span>
          <span><span className="font-black text-[1.1em] text-[#fcd249]">C</span>{t("hero.title3")}</span>
          <span>de</span>
        </span>

        <span className="space-x-2">
          <span><span className="font-black text-[1.4em] text-[#fcd249]">M</span>{t("hero.title4")}</span>
          <span><span className="font-black text-[1.4em] text-[#fcd249]">M</span>{t("hero.title5")}</span>
        </span>
      </h1>

      <section className="relative w-full overflow-hidden leading-none -mb-8">
        <svg
          className="block w-full h-[80px] rotate-180 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.22)]"
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#4b1252"
            d="
        M0,60
        C360,0 1080,120 1440,60
        L1440,200
        L0,200
        Z
      "
          />
        </svg>
      </section>

    </section>
  );
}
