import React from 'react';
import { useTranslate } from '../../hooks';
import { Title } from '../../ui';
import { translationProvider } from '../../utils';
import { Content } from '../content';
import { SideMenu } from '../side-menu';
import { Button, PageBody, PageHeader, PageLayout } from './page.style';

const languages = [
	{ value: 'en', label: 'English' },
	{ value: 'it', label: 'Italiano' }
];

const Page = () => {
	const { translate } = useTranslate();
	return (
		<PageLayout>
			<PageHeader>
				<Title>{translate('components.page.title')}</Title>
				{languages.map(lang => {
					return (
						<Button
							key={lang.value}
							onClick={() => translationProvider.changeLanguage(lang.value)}
						>
							{lang.label}
						</Button>
					);
				})}
			</PageHeader>
			<PageBody>
				<SideMenu />
				<Content />
			</PageBody>
		</PageLayout>
	);
};

export default Page;
