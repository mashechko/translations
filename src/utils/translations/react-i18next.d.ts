import 'react-i18next';
import en from './en.json';
import it from './it.json';

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: 'translations';
		resources: {
			en: typeof en;
			it: typeof it;
		};
	}
}
