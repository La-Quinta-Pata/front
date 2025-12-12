import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();

  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <h2 className="font-fira text-[#4b1252] text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 sm:mb-8">
        {t("description.title")}
      </h2>

      <p className="text-justify text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
        {t("description.p1")}
      </p>

      <p className="text-justify text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
        {t("description.p2")}
      </p>

      <p className="text-justify text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
        {t("description.p3")}
      </p>

      <p className="text-justify text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
        {t("description.p4")}
      </p>

      <aside 
        className="mt-8 sm:mt-10 space-y-2 sm:space-y-3"
        aria-label="Manifiesto"
      >
        <p className="text-center font-fira text-base sm:text-lg md:text-xl text-[#4b1252] font-bold">
          {t("description.manifesto1")}
        </p>

        <p className="text-center font-fira text-base sm:text-lg md:text-xl text-[#4b1252] font-bold">
          {t("description.manifesto2")}
        </p>

        <p className="text-center font-fira text-base sm:text-lg md:text-xl text-[#4b1252] font-bold">
          {t("description.manifesto3")}
        </p>
      </aside>
    </article>
  );
}