// Dependencies
import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'

import en from '../../../public/locales/en/translation.json'
import es from '../../../public/locales/es/translation.json'

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
}

i18n.use(reactI18nextModule).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
