import React from 'react';
import { useTranslate } from '../../hooks';
import { Title } from '../../ui';
import { Content } from '../content';
import { SideMenu } from '../side-menu';
import { PageBody, PageHeader, PageLayout } from './page.style';

const Page = () => {
	const { translate } = useTranslate();
	return (
		<PageLayout>
			<PageHeader>
				<Title>{translate('components.page.title')}</Title>
			</PageHeader>
			<PageBody>
				<SideMenu />
				<Content />
			</PageBody>
		</PageLayout>
	);
};

export default Page;
