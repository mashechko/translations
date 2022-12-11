import styled from 'styled-components';
import { Text } from '../../ui';

export const ContentWrapper = styled.div`
	padding: 0 20px;
`;

export const ListItem = styled(Text)`
	padding: 6px 0;

	& > & {
		padding: 2px 0 2px 16px;
		font-size: 14px;
		line-height: 24px;
	}
`;
