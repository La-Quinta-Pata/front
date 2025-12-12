import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4">

      <section className="w-full max-w-4xl mx-auto
            grid grid-cols-1 md:grid-cols-3
            gap-8 place-items-center md:gap-2
          ">

        <section className="relative w-60 h-40">
          <section
            className="absolute inset-0 -translate-y-3 rounded-xl
                bg-[radial-gradient(circle_at_top,#AF52DE,#4b1252)]"/>

          <section className="relative w-full h-full bg-white 
                border border-gray-300 rounded-xl 
                flex flex-col items-center overflow-hidden">
            <img src="/src/assets/images/book.png"
              alt={t("catalogSection.title")}
              className="w-10 h-10 mt-4
              filter grayscale sepia hue-rotate-[-25deg] saturate-[300%] brightness-90
" />
            <section className="p-2 text-center">
              <h3 className="text-sm font-semibold text-black mb-1">
                {t("catalogSection.title")}
              </h3>
              <p className="text-xs text-gray-700 leading-tight">
                {t("catalogSection.desc")}</p>
            </section>
          </section>
        </section>

        <section className="relative w-60 h-40">
          <section
            className="absolute inset-0 -translate-y-3 rounded-xl
                bg-[radial-gradient(circle_at_top,#dc034e,#fcd249)]"/>

          <section className="relative w-full h-full bg-white 
                border border-gray-300 rounded-xl 
                flex flex-col items-center overflow-hidden">
            <img
              src="/src/assets/images/us.png"
              alt={t("aboutSection.title")}
              className="w-10 h-10 mt-4
              filter grayscale sepia hue-rotate-[-25deg] saturate-[300%] brightness-90
"
            />
            <section className="p-2 text-center">
              <h3 className="text-sm font-semibold text-black mb-1">
                {t("aboutSection.title")} </h3>
              <p className="text-xs text-gray-700 leading-tight">
                {t("aboutSection.desc")}</p>
            </section>
          </section>
        </section>

        <section className="relative w-60 h-40">
          <section
            className="absolute inset-0 -translate-y-3 rounded-xl
                bg-[radial-gradient(circle_at_top,#3d506d,#007AFF)]"/>

          <section
            className="
                relative w-full h-full bg-white border border-gray-300 rounded-xl 
                flex flex-col items-center overflow-hidden">
            <img
              src="/src/assets/images/contact.png"
              alt={t("contactSection.title")}
              className="w-10 h-10 mt-4
              filter grayscale sepia hue-rotate-[-25deg] saturate-[300%] brightness-90
              "
            />
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-black mb-1">
                {t("contactSection.title")}
              </h3>
              <p className="text-xs text-gray-700 leading-tight">
                {t("contactSection.desc")}
              </p>
            </div>
          </section>
        </section>

      </section>
    </section>
  );
}
