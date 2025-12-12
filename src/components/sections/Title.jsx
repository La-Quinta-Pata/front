import { useTranslation } from "react-i18next";
import Wave from "../../layout/Wave"

export default function Title() {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="bg-[#4b1252] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-center text-[#ffffff] uppercase flex flex-col">
        <span className="space-x-2 mt-5">
          <span>
            <span className="font-black text-[1.1em] text-[#fcd249]">A</span>
            {t("hero.title2")}
          </span>
          <span>
            <span className="font-black text-[1.1em] text-[#fcd249]">C</span>
            {t("hero.title3")}
          </span>
          <span>de</span>
        </span>

        <span className="space-x-2">
          <span>
            <span className="font-black text-[1.4em] text-[#fcd249]">M</span>
            {t("hero.title4")}
          </span>
          <span>
            <span className="font-black text-[1.4em] text-[#fcd249]">M</span>
            {t("hero.title5")}
          </span>
        </span>
      </h2>

      <section className="relative w-full overflow-hidden leading-none -mb-8">
        <Wave />
      </section>
    </section>
  );
}