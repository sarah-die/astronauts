import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation.json';
import deTranslation from './de/translation.json';
import { Language } from 'types';

export const defaultLanguages: Language[] = [
  { name: 'English', key: 'en', active: true },
  { name: 'Deutsch', key: 'de', active: false },
];

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
};

// ToDo
// https://medium.com/geekculture/strong-typed-i18n-in-react-c43281de720c
// https://locize.com/blog/i18next-typescript/
// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next.use(initReactI18next).init({
  returnNull: false,
  debug: true,
  fallbackLng: 'en',
  resources,
  defaultNS: 'translation',
  lng: 'en', // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
