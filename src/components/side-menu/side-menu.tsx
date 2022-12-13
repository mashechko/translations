import React from 'react';
import { useTranslate } from '../../hooks';
import { Subtitle } from '../../ui';
import { ContentWrapper, ListItem } from './side-menu.style';

const SideMenu = () => {
	const { translate } = useTranslate();
	return (
		<ContentWrapper>
			<Subtitle>{translate('components.side-menu.contents')}</Subtitle>
			<ListItem>{translate('components.side-menu.1basicUsage')}</ListItem>
			<ListItem>
				{translate('components.side-menu.2notableFeatures')}
				<ListItem>{translate('components.side-menu.21declarative')}</ListItem>
				<ListItem>{translate('components.side-menu.22components')}</ListItem>
				<ListItem>{translate('components.side-menu.23functionalComponents')}</ListItem>
				<ListItem>
					{translate('components.side-menu.24reactHooks')}
					<ListItem>{translate('components.side-menu.241rulesOfHooks')}</ListItem>
				</ListItem>
				<ListItem>{translate('components.side-menu.25classBasedComponents')}</ListItem>
				<ListItem>{translate('components.side-menu.26virtualDOM')}</ListItem>
				<ListItem>{translate('components.side-menu.27lifecycleMethods')}</ListItem>
				<ListItem>{translate('components.side-menu.28JSX')}</ListItem>
				<ListItem>{translate('components.side-menu.29architectureBeyondHTML')}</ListItem>
			</ListItem>
			<ListItem>
				{translate('components.side-menu.3commonIdioms')}
				<ListItem>{translate('components.side-menu.31unidirectionalDataFlow')}</ListItem>
			</ListItem>
			<ListItem>{translate('components.side-menu.4futureDevelopment')}</ListItem>
			<ListItem>{translate('components.side-menu.5history')}</ListItem>
			<ListItem>{translate('components.side-menu.6licensing')}</ListItem>
			<ListItem>{translate('components.side-menu.7seeAlso')}</ListItem>
			<ListItem>{translate('components.side-menu.8references')}</ListItem>
			<ListItem>{translate('components.side-menu.9externalLinks')}</ListItem>
		</ContentWrapper>
	);
};

export default SideMenu;
