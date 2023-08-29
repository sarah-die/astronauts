import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enNs1 from './en/enNs1.json';
import enLayout from './en/enLayout.json';
import deNs1 from './de/deNs1.json';
import deLayout from './de/deLayout.json';
import { Language } from 'types';

export const defaultLanguages: Language[] = [
  { name: 'English', key: 'en', active: true },
  { name: 'Deutsch', key: 'de', active: false },
];

const resources = {
  en: {
    ns1: enNs1,
    layout: enLayout,
  },
  de: {
    ns1: deNs1,
    layout: deLayout,
  },
};

// ToDo
// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  resources,
  lng: 'en', // default language
});

export default i18next;
