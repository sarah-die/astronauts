import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEnglish from './translation/English/translation.json';
import translationGerman from './translation/German/translation.json';

const resources = {
  en: {
    translation: translationEnglish,
  },
  de: {
    translation: translationGerman,
  },
};

// ToDo
// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next.use(initReactI18next).init({
  debug: true,
  resources,
  lng: 'en', // default language
});

export default i18next;
