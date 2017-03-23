import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import zhLocaleData from 'react-intl/locale-data/zh';
import frLocaleData from 'react-intl/locale-data/fr';

import { DEFAULT_LOCALE } from 'application/containers/App/constants';

import enTranslationMessages from 'application/translations/en.json';
import deTranslationMessages from 'application/translations/de.json';
import zhTranslationMessages from 'application/translations/zh.json';
import frTranslationMessages from 'application/translations/fr.json';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);
addLocaleData(zhLocaleData);
addLocaleData(frLocaleData);

export const appLocales = [
  'en',
  'de',
  'zh',
  'fr',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  zh: formatTranslationMessages('zh', zhTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
};
