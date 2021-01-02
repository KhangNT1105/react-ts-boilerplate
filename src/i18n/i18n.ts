import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './en.json';
const resources = {
    en: {
        translation: EN
    }
}

i18next.use(initReactI18next).init({
    lng: 'en',
    resources,
    keySeparator: false,

  interpolation: {
    escapeValue: false
  }
})

export default i18next