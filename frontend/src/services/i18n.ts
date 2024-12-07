import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { defaultLocale, supportedLocales } from '../../app.config';


export function initI18n() {
  i18n.on('languageChanged', (lng) => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lng;
    document.cookie = `i18nLang=${lng}`;
  });
  return i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr }
    },
    lng: getLocale(),
    supportedLngs: supportedLocales,
    fallbackLng: defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });
}

function getLocale() {
  if (typeof document === 'undefined') {
    return defaultLocale;
  }
  return document.documentElement.lang;
}