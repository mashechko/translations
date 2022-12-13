import React from 'react';
import { useTranslate } from '../../hooks';
import { Subtitle, Text } from '../../ui';
import { Divider, TextWrapper } from './content.style';

const Content = () => {
	const { translate } = useTranslate();
	return (
		<TextWrapper>
			<Text>{translate('components.content.description')}</Text>
			<Divider />
			<Subtitle>{translate('components.content.declarativeTitle')}</Subtitle>
			<Text>{translate('components.content.declarativeDescription')}</Text>
			<Divider />
			<Subtitle>{translate('components.content.componentBasedTitle')}</Subtitle>
			<Text>{translate('components.content.componentBasedDescription')}</Text>
		</TextWrapper>
	);
};

export default Content;
