import React from 'react';
import { Subtitle, Text } from '../../ui';
import { Divider, TextWrapper } from './content.style';

const Content = () => {
	return (
		<TextWrapper>
			<Text>
				React (also known as React.js or ReactJS) is a free and open-source front-end
				JavaScript library[3] for building user interfaces based on UI components. It is
				maintained by Meta (formerly Facebook) and a community of individual developers and
				companies.[4][5][6] React can be used as a base in the development of single-page,
				mobile, or server-rendered applications with frameworks like Next.js. However, React
				is only concerned with state management and rendering that state to the DOM, so
				creating React applications usually requires the use of additional libraries for
				routing, as well as certain client-side functionality.
			</Text>
			<Divider />
			<Subtitle>Declarative</Subtitle>
			<Text>
				React makes it painless to create interactive UIs. Design simple views for each
				state in your application, and React will efficiently update and render just the
				right components when your data changes. Declarative views make your code more
				predictable and easier to debug.
			</Text>
			<Divider />
			<Subtitle>Component-Based</Subtitle>
			<Text>
				Build encapsulated components that manage their own state, then compose them to make
				complex UIs. Since component logic is written in JavaScript instead of templates,
				you can easily pass rich data through your app and keep state out of the DOM.
			</Text>
		</TextWrapper>
	);
};

export default Content;
