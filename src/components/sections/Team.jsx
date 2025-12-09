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
                bg-[radial-gradient(circle_at_top,#D62828,#D6282855)]"/>

          <section className="relative w-full h-full bg-white 
                border border-gray-300 rounded-xl 
                flex flex-col items-center overflow-hidden">
            <img src="/src/assets/images/book.png"
              alt={t("team.catalog.title")}
              className="w-10 h-10 mt-4" />
            <section className="p-2 text-center">
              <h3 className="text-sm font-semibold text-black mb-1">
                {t("team.catalog.title")}
              </h3>
              <p className="text-xs text-gray-700 leading-tight">
                {t("team.catalog.desc")}</p>
            </section>
          </section>
        </section>

        <section className="relative w-60 h-40">
          <section
            className="absolute inset-0 -translate-y-3 rounded-xl
                bg-[radial-gradient(circle_at_top,#F77F00,#F77F0055)]"/>

          <section className="relative w-full h-full bg-white 
                border border-gray-300 rounded-xl 
                flex flex-col items-center overflow-hidden">
            <img
              src="/src/assets/images/us.png"
              alt={t("team.about.title")}
              className="w-10 h-10 mt-4"
            />
            <section className="p-2 text-center">
              <h3 className="text-sm font-semibold text-black mb-1">
                {t("team.about.title")} </h3>
              <p className="text-xs text-gray-700 leading-tight">
                {t("team.about.desc")}</p>
            </section>
          </section>
        </section>

        <section className="relative w-60 h-40">
          <section
            className="absolute inset-0 -translate-y-3 rounded-xl
                bg-[radial-gradient(circle_at_top,#FCBF49,#FCBF4955)]"/>

          <section
            className="
                relative w-full h-full bg-white border border-gray-300 rounded-xl 
                flex flex-col items-center overflow-hidden">
            <img
              src="/src/assets/images/contact.png"
              alt={t("team.contact.title")}
              className="w-10 h-10 mt-4"
            />
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-black mb-1">
                {t("team.contact.title")}
              </h3>
              <p className="text-xs text-gray-700 leading-tight">
                {t("team.contact.desc")}
              </p>
            </div>
          </section>
        </section>

      </section>
    </section>
  );
}
