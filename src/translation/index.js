import i18n from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import esTranslation from "./locales/es/translation.json"
import catTranslation from "./locales/ca/translation.json"

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init(
    {
        fallbackLng: "es",
        debug: true,
        resources: {
            es: {translation: esTranslation},
            ca: { translation: catTranslation}
        }
    }
)

export default i18n