import { TOptionsBase } from 'i18next';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Paths } from '../types';
import { Translations } from '../utils';

export type TranslationKey = Paths<Translations['translations']>;

export const useTranslate = () => {
	const { t } = useTranslation();

	return useMemo(() => {
		const translate = (key: TranslationKey, options?: Record<string, string | number>) => {
			return t(key, options as TOptionsBase);
		};

		return { translate };
	}, [t]);
};
