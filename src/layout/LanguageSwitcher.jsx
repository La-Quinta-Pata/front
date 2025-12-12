import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "es" ? "ca" : "es";
    i18n.changeLanguage(newLang);
  };

  const isSpanish = i18n.language === "es";

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="flex items-center gap-2 px-2 py-1 rounded-md shadow-md text-xs transition-all w-20 justify-between bg-[#fcd249] text-gray-900 hover:bg-[#fcd249]/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
      aria-label={`Cambiar idioma a ${isSpanish ? "catalán" : "español"}`}
      aria-pressed={!isSpanish}
    >
      {isSpanish ? (
        <>
          <span className="font-semibold">CAT</span>
          <span
            className="w-2 h-2 bg-black rounded-full transition-all"
            aria-hidden="true"
          />
        </>
      ) : (
        <>
          <span
            className="w-2 h-2 bg-black rounded-full transition-all"
            aria-hidden="true"
          />
          <span className="font-semibold">ES</span>
        </>
      )}
    </button>
  );
}