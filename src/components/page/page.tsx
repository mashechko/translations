import React from 'react';
import { Title } from '../../ui';
import { Content } from '../content';
import { SideMenu } from '../side-menu';
import { PageBody, PageHeader, PageLayout } from './page.style';

const Page = () => {
	return (
		<PageLayout>
			<PageHeader>
				<Title>React (JavaScript library)</Title>
			</PageHeader>
			<PageBody>
				<SideMenu />
				<Content />
			</PageBody>
		</PageLayout>
	);
};

export default Page;
