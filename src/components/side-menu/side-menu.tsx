import React from 'react';
import { Subtitle } from '../../ui';
import { ContentWrapper, ListItem } from './side-menu.style';

const SideMenu = () => {
	return (
		<ContentWrapper>
			<Subtitle>Contents</Subtitle>
			<ListItem>1 Basic usage</ListItem>
			<ListItem>
				2 Notable features
				<ListItem>2.1 Declarative </ListItem>
				<ListItem>2.2 Components</ListItem>
				<ListItem>2.3 Functional components</ListItem>
				<ListItem>
					2.4 React hooks <ListItem>2.4.1 Rules of hooks</ListItem>
				</ListItem>
				<ListItem>2.5 Class-based components</ListItem>
				<ListItem>2.6 Virtual DOM</ListItem>
				<ListItem>2.7 Lifecycle methods</ListItem>
				<ListItem>2.8 JSX </ListItem>
				<ListItem>2.9 Architecture beyond HTML</ListItem>
			</ListItem>
			<ListItem>
				3 Common idioms<ListItem>3.1 Unidirectional data flow</ListItem>
			</ListItem>
			<ListItem>4 Future development</ListItem>
			<ListItem>5 History</ListItem>
			<ListItem>6 Licensing</ListItem>
			<ListItem>7 See also</ListItem>
			<ListItem>8 References</ListItem>
			<ListItem>9 External links</ListItem>
		</ContentWrapper>
	);
};

export default SideMenu;
