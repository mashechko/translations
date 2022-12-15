import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import languageEN from './en.json';
import languageIT from './it.json';

type Translations = typeof languageEN;

enum Locale {
	en = 'en',
	it = 'it'
}

// eslint-disable-next-line import/no-named-as-default-member
void i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			[Locale.en]: languageEN,
			[Locale.it]: languageIT
		},
		lng: Locale.en,
		fallbackLng: Locale.en,
		ns: ['translations'],
		defaultNS: 'translations',
		keySeparator: '.',
		interpolation: {
			escapeValue: false,
			formatSeparator: ','
		},
		react: {
			bindI18n: 'languageChanged loaded',
			nsMode: 'default'
		}
	});

export type { Translations };
export { i18n as translationProvider };
