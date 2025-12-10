import React from 'react'
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
    const {i18n} = useTranslation();
 
    const toggleLang = ()=>{
        const newLang = i18n.language === "es" ? "ca" : "es";
        i18n.changeLanguage(newLang);
    }
  return (
    <button
      onClick={toggleLang}
      className="
        flex items-center gap-2 px-2 py-1 rounded-md shadow-md text-xs transition-all w-20 justify-between
        bg-[#fcd249] text-gray-900 hover:bg-[#fcd249]/50 cursor-pointer"
      aria-label="Change language"
    >
      {i18n.language === "es" ? (
        <>
          <span>CAT</span>
          <span className="w-2 h-2 bg-black rounded-full transition-all"></span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 bg-black rounded-full transition-all"></span>
          <span>ES</span>
        </>
      )}
    </button>
  )
}

export default LanguageSwitcher